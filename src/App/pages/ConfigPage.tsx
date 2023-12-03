
import React from "react";
import { useStoreState, useStoreActions } from "../store/store";
import NumberField from "../components/input/NumberField";
import { Box, Card } from "@mui/material";
import ThresholdSelector from "../core/elections/input/ThresholdSelector";
import { TurnoutInput } from "../core/turnout/TurnoutInput";



export default function ConfigPage() {
	const config = useStoreState(state => state.electionInput.config);
	const majority = useStoreState(state => state.electionOutput.neededForMajority);
	const editConfig = useStoreActions(actions => actions.editConfig);

	return (
		<div>
			<Card>
				<h1>Config</h1>
				<p>
                Seats in parliament:{" "}
					<NumberField
						inputProps={{ type: "number", inputProps: { min: 1 } }}
						value={(config.seatsTotal)}
						onChange={num => editConfig({ seatsTotal: num })}
                    
					/>
				</p>
				<p>
					{majority.toString()} seats needed for majority
				</p>
				<p>
					<ThresholdSelector />
				</p>
				<TurnoutInput/>
			</Card>
		</div>
	);
}