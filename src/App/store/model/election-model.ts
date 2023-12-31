import { Action, Computed } from "easy-peasy";
import { AppModel } from "./app-model";
import { ApportionmentMethodName, HighLow, ResultApproximation } from "./apportionment-method";

export interface PartyInputModel extends HasID {
    name: string;
    color: string;
    votes: int;
}

export interface ElectionConfigModel {
    threshold?: Rational;
    seatsTotal: int;
    method: ApportionmentMethodName;
    ifNotExact: HighLow;
}

export interface PartyOutputModel extends PartyInputModel {
    seats: int;
    percentage: Rational;
}

export interface ElectionInputModel {
    parties: PartyInputModel[];
    config: ElectionConfigModel;
}

export interface ElectionOutputModel {
    parties: PartyOutputModel[];
    neededForMajority: int;
    hasThreshold: boolean;
    totalVotes: int;
    methodHumanName: string;
    seats: int;
    isDivisorMethod: boolean;
    resultApproximation: ResultApproximation;
}


export interface ElectionModel {
    electionInput: ElectionInputModel;
    addParty: Action<AppModel>;
    removeParty: Action<AppModel, ID>;
    editParty: Action<AppModel, Partial<PartyInputModel> & HasID>;
    editConfig: Action<AppModel, Partial<ElectionConfigModel>>;
    moveParty: Action<AppModel, HasID & { direction: "up" | "down" }>
    electionOutput: Computed<AppModel, ElectionOutputModel>;
}