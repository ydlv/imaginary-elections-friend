import { hamilton } from "apportionment";
import { ElectionInput, ElectionOutput, PartyInput, PartyOutput } from "../model/election-model";

export function calculate(input: ElectionInput): ElectionOutput {
	const allParties = input.parties;
	let includedParties = allParties;
	let excludedParties: PartyInput[] = [];
	const totalTurnout = allParties.map(x => x.votes).reduce((s, x) => s + x, 0);
	let seats = input.parties.map(() => 0);
	if (input.config.seatsTotal >= 0) {
		if(input.config.threshold !== undefined) {
			const minAmount = totalTurnout * input.config.threshold;
			includedParties = allParties.filter(p => p.votes >= minAmount);
			excludedParties = allParties.filter(p => p.votes < minAmount);
		} 
		const result = hamilton(includedParties.map(x => (x.votes)), (input.config.seatsTotal));
		seats = result.apportionment;
	}
	const includedPartyOutputs: PartyOutput[] = includedParties.map((x, i) => ({
		...x,
		percentage: x.votes / totalTurnout,
		seats: (seats[i])
	}));
	const excludedPartyOutputs: PartyOutput[] = excludedParties.map((x,i) => ({
		...x,
		percentage: x.votes / totalTurnout,
		seats: 0  
	}));
	const partyOutputs: PartyOutput[] = [...includedPartyOutputs, ...excludedPartyOutputs];
	// partyOutputs.sort((y, x) => (x.votes - y.votes));
	return {
		neededForMajority: Math.floor(1 + input.config.seatsTotal / 2),
		parties: partyOutputs,
		hasThreshold: input.config.threshold !== undefined,
		totalVotes: totalTurnout
	};
}