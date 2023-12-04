import { Action } from "easy-peasy";
import { AppModel } from "./app-model";

export interface AddVotesPayload {
    type: "add";
    amount: int;
}

export interface RemoveVotesPayload {
    type: "remove";
    amount: int;
}
export interface MoveVotesPayload {
    type: "move";
    amount: int;
    targetParty: ID;
}

export type ChangeVotersPayload = AddVotesPayload | RemoveVotesPayload | MoveVotesPayload;
export type ChangeVotersPayloadType = "add" | "move" | "remove";


export interface ChangeVoters {
    
    selectedAction: ChangeVotersPayloadType;
    add: AddVotesPayload;
    remove: RemoveVotesPayload;
    move: MoveVotesPayload;
    selectedParty: ID;
    modalOpen: boolean;
    openModal: Action<ChangeVoters, { partyId: ID }>;
    setAction: Action<ChangeVoters, ChangeVotersPayloadType>;
    setPayload: Action<ChangeVoters, Partial<ChangeVotersPayload> & {type: ChangeVotersPayloadType}>;
    closeModal: Action<ChangeVoters, never>;
    selectParty: Action<ChangeVoters, ID>;
}

export interface ChangeVotersModel {
    change: ChangeVoters,
    commitChange: Action<AppModel, never>;
}