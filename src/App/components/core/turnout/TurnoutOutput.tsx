import { useStoreState } from "../../store/store";
import { Percents } from "../../components/utils/react-utils";
import React from "react";

export function TurnoutOutput() {
	const turnoutPercents = useStoreState(state => state.turnoutOutput.turnoutPercentage);
	const enabled = useStoreState(state => state.turnoutInput.enabled);
	return (
		<>
			{enabled && (
				<p>
                    Voter turnout: <Percents number={turnoutPercents} fractionDigits={1} />
				</p>
			)}
		</>
	);
}