
import React from "react";
import { Box, Card, Grid, Stack } from "@mui/material";
import ThresholdSelector from "../core/elections/input/config/ThresholdSelector";
import { TurnoutInput } from "../core/turnout/TurnoutInput";
import MethodSelector from "../core/elections/input/config/MethodSelector";
import OutputPreview from "../core/elections/output/OutputPreview";
import NumberField from "../utils/input/NumberField";
import { useStoreActions, useStoreState } from "../../store/store";



export default function ConfigPage() {
	const config = useStoreState(state => state.electionInput.config);
	const majority = useStoreState(state => state.electionOutput.neededForMajority);
	const editConfig = useStoreActions(actions => actions.editConfig);

	return (
		<Grid container>
			<Grid item xs={6}>
				<Stack spacing={3}>
					<h1>Config</h1>
					<Stack direction={"row"} spacing={2} alignItems={"center"}>
						<span>Seats in parliament:</span>
						<NumberField
							inputProps={{ type: "number", inputProps: { min: 1 } }}
							value={(config.seatsTotal)}
							onChange={num => editConfig({ seatsTotal: num })}
                    
						/>
					</Stack>
					<div>
						{majority.toString()} seats needed for majority
					</div>
					<ThresholdSelector />
					<MethodSelector/>
					<TurnoutInput/>
				</Stack>
			</Grid>
			<Grid item xs={6}>
				<OutputPreview/>
			</Grid>
		</Grid>
	);
}