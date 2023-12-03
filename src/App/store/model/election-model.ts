import { Action, Computed } from "easy-peasy";
import { AppModel } from "./app-model";

export interface PartyInputModel extends HasID {
    name: string;
    color: string;
    votes: int;
}

export interface ElectionConfigModel {
    threshold?: Rational;
    seatsTotal: int;
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
}


export interface ElectionModel {
    electionInput: ElectionInputModel;
    addParty: Action<AppModel>;
    removeParty: Action<AppModel, ID>;
    editParty: Action<AppModel, Partial<PartyInputModel> & HasID>;
    editConfig: Action<AppModel, Partial<ElectionConfigModel>>;
    moveParty: Action<AppModel, HasID & { direction: "left" | "right" }>
    electionOutput: Computed<AppModel, ElectionOutputModel>;
}