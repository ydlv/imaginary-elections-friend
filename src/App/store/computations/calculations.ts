import * as apportionment from "apportionment";
import { ElectionInputModel, ElectionOutputModel, PartyInputModel, PartyOutputModel } from "../model/election-model";
import { methodHumanName, methods } from "../model/apportionment-method";
import { add } from "../../util/fp";

function filterByInclusion(input: ElectionInputModel) {
	const allParties = input.parties;
	let includedParties = allParties;
	let excludedParties: PartyInputModel[] = [];
	const totalTurnout = allParties.map(x => x.votes).reduce((s, x) => s + x, 0);
	if (input.config.threshold !== undefined) {
		const minAmount = totalTurnout * input.config.threshold;
		includedParties = allParties.filter(p => p.votes >= minAmount);
		excludedParties = allParties.filter(p => p.votes < minAmount);
		if(includedParties.length == 0) {
			includedParties = allParties;
			excludedParties = [];
		}
	}
	return {includedParties, excludedParties};
}

export function calculate(input: ElectionInputModel): ElectionOutputModel {
	const totalTurnout = input.parties.map(x => x.votes).reduce(add, 0);
	const methodName = input.config.method;
	const method = methods[methodName];
	const { excludedParties, includedParties } = filterByInclusion(input);
	const seats = method(includedParties.map(x => (x.votes)), (input.config.seatsTotal));

	const includedPartyOutputs: PartyOutputModel[] = includedParties.map((x, i) => ({
		...x,
		percentage: x.votes / totalTurnout,
		seats: (seats[i])
	}));
	const excludedPartyOutputs: PartyOutputModel[] = excludedParties.map((x, i) => ({
		...x,
		percentage: x.votes / totalTurnout,
		seats: 0
	}));
	const partyOutputs: PartyOutputModel[] = [...includedPartyOutputs, ...excludedPartyOutputs];
	// partyOutputs.sort((y, x) => (x.votes - y.votes));
	return {
		neededForMajority: Math.floor(1 + input.config.seatsTotal / 2),
		parties: partyOutputs,
		hasThreshold: input.config.threshold !== undefined,
		totalVotes: totalTurnout,
		methodHumanName: methodHumanName[input.config.method]
	};
}

