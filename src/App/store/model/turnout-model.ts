import { Action, Computed } from "easy-peasy";
import { AppModel } from "./app-model";


export interface TurnoutInputModel extends Togglable {
    elligibleVoters: int;
    turnoutEnabled: boolean;
}

export interface TurnoutOutputModel extends Togglable {
    turnoutPercentage: Rational;
}

export interface TurnoutModel {
    turnoutInput: TurnoutInputModel;
    turnoutOutput: Computed<AppModel, TurnoutOutputModel>;
    editTurnout: Action<AppModel, Partial<TurnoutInputModel>>;
}