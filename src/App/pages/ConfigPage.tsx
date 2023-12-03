
import React from "react";
import { useStoreState, useStoreActions } from "../store/store";
import NumberField from "../components/input/NumberField";
import { Box, Card, Grid } from "@mui/material";
import ThresholdSelector from "../core/elections/input/config/ThresholdSelector";
import { TurnoutInput } from "../core/turnout/TurnoutInput";
import MethodSelector from "../core/elections/input/config/MethodSelector";
import OutputPreview from "../core/elections/output/OutputPreview";



export default function ConfigPage() {
	const config = useStoreState(state => state.electionInput.config);
	const majority = useStoreState(state => state.electionOutput.neededForMajority);
	const editConfig = useStoreActions(actions => actions.editConfig);

	return (
		<Grid container>
			<Grid item xs={8}>
				<h1>Config</h1>
				<div>
                Seats in parliament:{" "}
					<NumberField
						inputProps={{ type: "number", inputProps: { min: 1 } }}
						value={(config.seatsTotal)}
						onChange={num => editConfig({ seatsTotal: num })}
                    
					/>
				</div>
				<div>
					{majority.toString()} seats needed for majority
				</div>
				<ThresholdSelector />
				<MethodSelector/>
				<TurnoutInput/>
			</Grid>
			<Grid item xs={4}>
				<OutputPreview/>
			</Grid>
		</Grid>
	);
}