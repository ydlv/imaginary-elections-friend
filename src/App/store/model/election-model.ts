import { Action, Computed } from "easy-peasy";
import { AppModel } from "./app-model";

export interface PartyInput extends HasID {
    name: string;
    color: string;
    votes: int;
}

export interface ElectionConfig {
    threshold?: Rational;
    seatsTotal: int;
}

export interface PartyOutput extends PartyInput {
    seats: int;
    percentage: Rational;
}

export interface ElectionInput {
    parties: PartyInput[];
    config: ElectionConfig;
}

export interface ElectionOutput {
    parties: PartyOutput[];
    neededForMajority: int;
    hasThreshold: boolean;
    totalVotes: int;
}


export interface ElectionModel {
    electionInput: ElectionInput;
    addParty: Action<AppModel>;
    removeParty: Action<AppModel, ID>;
    editParty: Action<AppModel, Partial<PartyInput> & HasID>;
    editConfig: Action<AppModel, Partial<ElectionConfig>>;
    moveParty: Action<AppModel, HasID & { direction: "left" | "right" }>
    electionOutput: Computed<AppModel, ElectionOutput>;
}