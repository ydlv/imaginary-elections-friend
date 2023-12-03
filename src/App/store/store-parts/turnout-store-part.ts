import { computed, action } from "easy-peasy";
import { add } from "../../util/fp";
import { TurnoutModel } from "../model/turnout-model";
import { setAttribute, setAttributeFromPartial } from "../../util/set-attribute";


export const turnoutStorePart: TurnoutModel = {
	turnoutInput: {
		elligibleVoters: 1_000_000,
		turnoutEnabled: false,
		enabled: false
	},
	turnoutOutput: computed(store => {
		const totalVotes = store.electionInput.parties.map(x => x.votes).reduce(add, 0);
		const elligibleVoters = store.turnoutInput.elligibleVoters;
		return {
			turnoutPercentage: totalVotes / elligibleVoters,
			enabled: store.turnoutInput.enabled,

		};
	}),
	editTurnout: action((store, payload) => {
		setAttributeFromPartial(store, "turnoutInput", payload);
	})
};