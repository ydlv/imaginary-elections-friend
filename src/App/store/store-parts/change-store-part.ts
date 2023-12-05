/* eslint-disable no-case-declarations */
import { FilterActionTypes, StateMapper, Store, action,  } from "easy-peasy";
import { ChangeVotersModel } from "../model/change-voters";
import { AppModel } from "../model/app-model";
import { setAttributeFromPartial } from "../../util/set-attribute";
import { findWithIndex } from "../../util/id-array-operations";

const mutators = {
	add(state: StateMapper<FilterActionTypes<AppModel>>) {
		const partyId = state.change.selectedParty;
		const [party, i] = findWithIndex(state.electionInput.parties, partyId);
		const added = state.change.add.amount;
		setAttributeFromPartial(state.electionInput.parties, i, { votes: party.votes + added });
	},
	
	remove(state: StateMapper<FilterActionTypes<AppModel>>) {
		const partyId = state.change.selectedParty;
		const [party, i] = findWithIndex(state.electionInput.parties, partyId);
		const removed = state.change.remove.amount;
		setAttributeFromPartial(state.electionInput.parties, i, { votes: party.votes - removed });
	},
	
	move(state: StateMapper<FilterActionTypes<AppModel>>) {
		const partyId = state.change.selectedParty;
		const [party, i] = findWithIndex(state.electionInput.parties, partyId);
		const added = state.change.add.amount;
		setAttributeFromPartial(state.electionInput.parties, i, { votes: party.votes + added });
	}
	
};
	
export const changePart: ChangeVotersModel = {
	change: {
		add: {
			amount: 0,
			type: "add"
		},
		remove: {
			amount: 0,
			type: "remove"
		},
		move: {
			amount: 0,
			targetParty: "",
			type: "move"
		},

		selectedAction: "add",
		selectedParty: "",
		modalOpen: false,

		selectParty: action((state, partyID) => {
			state.selectedParty = partyID;
		}),
		closeModal: action((state, _) => {
			state.modalOpen = false;
		}),
		openModal: action((state, payload) => {
			state.modalOpen = true;
			state.selectedParty = payload.partyId;
		}),
		setAction: action((state, action) => {
			state.selectedAction = action;
			
		}),
		setPayload: action((state, payload) => {
			setAttributeFromPartial(state, payload.type, payload);
		}),
	},
	commitChange: action((state, _) => {
		mutators[state.change.selectedAction](state);
		state.change.modalOpen = false;
	}),
};

export function initParties(model: Store<AppModel>) {
	const current = model.getState();
    
	const parties = current.electionInput.parties;
	const firstID = parties[0].id, secondID = parties[1].id;

	model.dispatch.change.selectParty(firstID);
	model.dispatch.change.setPayload({ type: "move", amount: 0, targetParty: secondID });
}
