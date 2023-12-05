import React from "react";
import { useStoreState, useStoreActions } from "../../../store/store";
import NumberField from "../../../components/utils/input/NumberField";
import { Checkbox, FormControl, FormControlLabel, InputLabel, Stack } from "@mui/material";


export function TurnoutInput() {
	const elligibleVoterCount = useStoreState(state => state.turnoutInput.elligibleVoters);
	const edit = useStoreActions(state => state.editTurnout);
	const enabled = useStoreState(state => state.turnoutInput.enabled);
	return (
		<>
			<h2>
				<FormControlLabel control={
					<Checkbox checked={enabled}
						onChange={e => edit({ enabled: e.target.checked })}
					/>} label={<h2>{"Calculate voter turnout %"}</h2>}/>
			</h2>
			{enabled && (
				<Stack direction={"row"} alignItems={"center"}>
					{"elligible voters: "}&nbsp;
					<NumberField
						inputProps={{min: 1}}
						value={(elligibleVoterCount)}
						integer={true}
						onChange={num => edit({ elligibleVoters: num })}
					/>
				</Stack>
			)}
		</>
	);
}