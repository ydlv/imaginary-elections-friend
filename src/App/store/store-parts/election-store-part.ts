import { action, computed } from "easy-peasy";
import uniqid from "uniqid";
import { calculate } from "../computations/calculations";
import { ElectionModel } from "../model/election-model";
import { findIndex, findWithIndex, remove } from "../../util/id-array-operations";
import { setAttributeFromPartial } from "../../util/set-attribute";
import { generateParty } from "../misc/generate-party";
import { isDivisorMethod } from "../model/apportionment-method";

export const electionStorePart: ElectionModel = {
	electionInput: {
		parties: [
			{ color: "#ff0000", name: "Liberal Party", id: uniqid(), votes: 1 },
			{ color: "#0000ff", name: "Conservative Party", id: uniqid(), votes: 1 }
		],
		config: {
			seatsTotal: 120,
			method: "jefferson",
			threshold: undefined,
			ifNotExact: "high",
		},
	},
	addParty: action((state) => {
		const newid = uniqid();
		const { name, color } = generateParty();
		state.electionInput.parties.push({ id: newid, name, color, votes: 1 });
	}),
	editParty: action((state, party) => {
		const i = findIndex(state.electionInput.parties, party.id);
		setAttributeFromPartial(state.electionInput.parties, i, party);
	}),
	removeParty: action((state, id) => {
		remove(state.electionInput.parties, id);
		
		const parties = state.electionInput.parties;
		const firstID = parties[0].id, secondID = parties[1].id;

		state.change.selectedParty = firstID;
		state.change.move.targetParty = secondID;
	}),
	editConfig: action((state, config) => {
		setAttributeFromPartial(state.electionInput, "config", config);
	}),
	moveParty: action((state, { direction, id }) => {
		const i = state.electionInput.parties.findIndex(x => x.id == id);
		const j = i + (direction == "up" ? -1 : 1);

		const partyI = state.electionInput.parties[i];
		const partyJ = state.electionInput.parties[j];
		state.electionInput.parties[i] = partyJ;
		state.electionInput.parties[j] = partyI;
	}),
	electionOutput: computed(state => {
		const input = state.electionInput;
		return calculate(input);
	}),
	
};