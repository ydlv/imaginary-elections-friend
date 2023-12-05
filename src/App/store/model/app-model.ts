import { Action } from "easy-peasy";
import { ChangeVotersModel } from "./change-voters";
import { ElectionModel } from "./election-model";
import { TurnoutModel } from "./turnout-model";

export type AppModel = ElectionModel & TurnoutModel & ChangeVotersModel;