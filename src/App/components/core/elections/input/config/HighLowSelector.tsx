/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ApportionmentMethodName, HighLow, methodHumanName } from "../../../../../store/model/apportionment-method";
import { useStoreActions, useStoreState } from "../../../../../store/store";

export default function HighLowSelector() {
	const isDivisorMethod = useStoreState(state => state.electionOutput.isDivisorMethod);
	const ifNotExact = useStoreState(state => state.electionInput.config.ifNotExact);
	const editConfig = useStoreActions(state => state.editConfig);

	return (<>{isDivisorMethod && (
		<FormControl>
			<InputLabel id="demo-simple-select-label">{"If not exact result found"}</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={ifNotExact}
				label="Age"
				onChange={e => editConfig({ ifNotExact: e.target.value as HighLow })}
			>
				<MenuItem value={"high"} key={"high"}>add seats</MenuItem>
				<MenuItem value={"low"} key={"low"}>remove seats</MenuItem>
			</Select>
		</FormControl>
	)}</>);
}