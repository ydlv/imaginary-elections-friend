/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { useStoreState, useStoreActions } from "../../../../store/store";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ApportionmentMethodName, methodHumanName } from "../../../../store/model/apportionment-method";

const methods = Object.entries(methodHumanName);

export default function MethodSelector() {
	const method = useStoreState(state => state.electionInput.config.method);
	const setMethod = useStoreActions(state => state.editConfig);

	return (
		<FormControl>
			<InputLabel id="demo-simple-select-label">{"Apportionment method "}</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={method}
				label="Age"
				onChange={e => setMethod({ method: e.target.value as ApportionmentMethodName })}
			>
				{methods.map(([method, humanName]) => (
					<MenuItem value={method} key={method}>{humanName}</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}