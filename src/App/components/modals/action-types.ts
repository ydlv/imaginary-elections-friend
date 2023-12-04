
export type ActionType = "add" | "remove" | "move";

export type ChangeVotersPayload = AddVotersPayload | RemoveVotersPayload | MoveVotersPayload;

export interface AddVotersPayload {
    type: "add";
    votes: int;
}

export interface RemoveVotersPayload {
    type: "remove";
    votes: int;
}

export interface MoveVotersPayload {
    type: "move";
    votes: int;
    targetPartyId: int;
}