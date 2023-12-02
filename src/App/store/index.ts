import { createStore, computed, action, createTypedHooks } from "easy-peasy";
import { AppModel } from "../store/model";
import { calculate } from "./computations/calculations";
import { findWithIndex, remove } from "./utils/id-array-operations";
import uniqid from "uniqid";


export const store = createStore<AppModel>({
	input: {
		parties: [
			{ color: "#ff0000", name: "Liberal Party", id: uniqid(), votes: 1 },
			{ color: "#0000ff", name: "Conservative Party", id: uniqid(), votes: 1 }
		],
		config: {
			elligibleVoterCount: 100,
			seatsTotal: 120,
			threshold: 3.25 / 100
		}
	},
	addParty: action((state) => {
		const newid = uniqid();
		state.input.parties.push({ id: newid, name: "Party name", color: "#000000", votes: 0 });
	}),
	editParty: action((state, party) => {
		const [existingParty, i] = findWithIndex(state.input.parties, party.id);
		state.input.parties[i] = {...existingParty, ...party};
	}),
	removeParty: action((state, id) => {
		remove(state.input.parties, id);
	}),
	editConfig: action((state, config) => {
		state.input.config = {...(state.input.config), ...config};
	}),
	moveParty: action((state, { direction, id }) => {
		const i = state.input.parties.findIndex(x => x.id == id);
		const j = i + (direction == "left" ? -1 : 1);

		const partyI = state.input.parties[i];
		const partyJ = state.input.parties[j];
		state.input.parties[i] = partyJ;
		state.input.parties[j] = partyI;
	}),
	output: computed(state => {
		const input = state.input;
		return calculate(input);
	})
});

(window as any)["store"] = store;

export const { useStore, useStoreActions, useStoreDispatch, useStoreState } = createTypedHooks<AppModel>();
