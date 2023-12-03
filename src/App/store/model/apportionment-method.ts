import * as apt from "apportionment";

export type ApportionmentMethodName = "hamilton" | "jefferson" | "adams" | "webster" | "huntingtonHill";

export type ApportionmentMethod = (votes: number[], seats: number) => number[];

export const methodHumanName: Record<ApportionmentMethodName, string> = {
	hamilton: "Hamilton (Largest remainder method; Hare–Niemeyer; Vinton)",
	adams: "Adams",
	huntingtonHill: "Huntington-Hill",
	jefferson: "Jefferson (greatest divisors method; D'Hont)",
	webster: "Webster (Sainte-Laguë method)"
};

// not exported by library
type DivisorMethodResult = ReturnType<typeof apt.adams>;

function apportionmentFrom(result: DivisorMethodResult) {
	// todo: select between low and high
	return (result.exact || result.high).apportionment;
}

export const methods: Record<ApportionmentMethodName, ApportionmentMethod> = {
	adams: (votes, seats) => apportionmentFrom(apt.adams(votes, seats)),
	hamilton: (votes, seats) => apt.hamilton(votes, seats).apportionment,
	huntingtonHill: (votes, seats) => apportionmentFrom(apt.huntingtonHill(votes, seats)),
	jefferson: (votes, seats) => apportionmentFrom(apt.jefferson(votes, seats)),
	webster: (votes, seats) => apportionmentFrom(apt.webster(votes, seats))
};