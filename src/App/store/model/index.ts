import { Action, Computed } from "easy-peasy";

export interface HasID {
    id: ID;
}

export interface PartyInput extends HasID {
    name: string;
    color: string;
    votes: number;
}

export interface ElectionConfig {
    threshold?: Rational;
    seatsTotal: int;
    elligibleVoterCount: int;
}



export interface PartyOutput extends PartyInput {
    seats: int;
    percentage: Rational;
}

export interface AppInput {
    parties: PartyInput[];
    config: ElectionConfig;
}

export interface AppOutput {
    parties: PartyOutput[];
    turnoutPercentage: Rational;
    neededForMajority: int;
    totalTurnout: int;
    hasThreshold: boolean;
}

export interface AppModel {
    input: AppInput;
    addParty: Action<AppModel>;
    removeParty: Action<AppModel, ID>;
    editParty: Action<AppModel, Partial<PartyInput> & HasID>;
    editConfig: Action<AppModel, Partial<ElectionConfig>>;
    moveParty: Action<AppModel, HasID & { direction: "left" | "right" }>
    output: Computed<AppModel, AppOutput>;
}