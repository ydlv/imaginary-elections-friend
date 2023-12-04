import React, { ReactNode } from "react";
import { useStoreActions, useStoreState } from "../../../../../../store/store";
import { find } from "../../../../../../util/id-array-operations";
import { StateMapper, FilterActionTypes, ActionCreator } from "easy-peasy";
import { ChangeVoters, ChangeVotersPayload, ChangeVotersPayloadType } from "../../../../../../store/model/change-voters";
import { PartyInputModel } from "../../../../../../store/model/election-model";

export interface ChangeVotersComponentData {
    state: StateMapper<FilterActionTypes<ChangeVoters>>;
    parties: PartyInputModel[];
    selectedParty: PartyInputModel;
    otherSelectedParty: PartyInputModel;
    setPayload: ActionCreator<Partial<ChangeVotersPayload> & {
        type: ChangeVotersPayloadType;
    }>;
    
}

export function createChangeVotersComponent(template: (data: ChangeVotersComponentData) => JSX.Element) {
	return (_: EmptyObject) => {
		const state = useStoreState(state => state.change);
		const parties = useStoreState(state => state.electionInput.parties);
        
		const partyId = state.selectedParty;
		const otherPartyId = state.move.targetParty;

		// eslint-disable-next-line no-debugger
		debugger;
        
		const setPayload = useStoreActions(state => state.change.setPayload);
        
		const data: ChangeVotersComponentData = {
			otherSelectedParty: find(parties, otherPartyId),
			parties: parties,
			selectedParty: find(parties, partyId),
			setPayload: setPayload,
			state: state,
            
		};
		return template(data);
	};
}
