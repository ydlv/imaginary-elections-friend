
import React from "react";
import { Percents } from "../../utils/react-utils";
import { useStoreState } from "../../../store/store";

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