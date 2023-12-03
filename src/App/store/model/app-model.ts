import { ElectionModel } from "./election-model";
import { TurnoutModel } from "./turnout-model";

export type AppModel = ElectionModel & TurnoutModel;