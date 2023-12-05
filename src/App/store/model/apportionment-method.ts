import * as apt from "apportionment";

export type ApportionmentMethodName = "hamilton" | "jefferson" | "adams" | "webster" | "huntingtonHill";
export type ResultApproximation = "high" | "low" | "exact" | "n/a";
export type HighLow = "high" | "low";
export type ApportionmentMethod = (votes: number[], seats: number, ifNotExact: HighLow) => [number[], ResultApproximation];

export const methodHumanName: Record<ApportionmentMethodName, string> = {
	hamilton: "Hamilton (Largest remainder method; Hare–Niemeyer; Vinton)",
	adams: "Adams",
	huntingtonHill: "Huntington-Hill",
	jefferson: "Jefferson (greatest divisors method; D'Hont)",
	webster: "Webster (Sainte-Laguë method)"
};

// not exported by library
type DivisorMethodResult = ReturnType<typeof apt.adams>;

function apportionmentFrom(result: DivisorMethodResult, ifNotExact: HighLow): [number[], ResultApproximation] {
	if(result.exact) {
		return [result.exact.apportionment, "exact"];
	}
	return [result[ifNotExact].apportionment, ifNotExact];
}

export const methods: Record<ApportionmentMethodName, ApportionmentMethod> = {
	adams: (votes, seats, ifNotExact) => apportionmentFrom(apt.adams(votes, seats), ifNotExact),
	hamilton: (votes, seats, _) => [apt.hamilton(votes, seats).apportionment, "n/a"],
	huntingtonHill: (votes, seats, ifNotExact) => apportionmentFrom(apt.huntingtonHill(votes, seats), ifNotExact),
	jefferson: (votes, seats, ifNotExact) => apportionmentFrom(apt.jefferson(votes, seats), ifNotExact),
	webster: (votes, seats, ifNotExact) => apportionmentFrom(apt.webster(votes, seats), ifNotExact)
};

export function isDivisorMethod(method: ApportionmentMethodName) {
	return method !== "hamilton";
}