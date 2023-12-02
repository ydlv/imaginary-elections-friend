
import React from "react";
import { useStoreState, useStoreActions } from "../../../store";
import NumberField from "../../../components/input/NumberField";
import { Box, Card } from "@mui/material";
import ThresholdSelector from "./ThresholdSelector";



export default function ConfigBox() {
	const config = useStoreState(state => state.input.config);
	const majority = useStoreState(state => state.output.neededForMajority);
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
				<p>
                    Elligible voters:
					<NumberField
						inputProps={{min: 1}}
						value={(config.elligibleVoterCount)}
						integer={true}
						onChange={num => editConfig({ elligibleVoterCount: num })}
					/>
				</p>
			</Card>
		</div>
	);
}