/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { useStoreState, useStoreActions } from "../../../../../store/store";
import { Stack, Switch } from "@mui/material";
import NumberField from "../../../../../components/utils/input/NumberField";


export default function ThresholdSelector() {
	const threshold = useStoreState(state => state.electionInput.config.threshold);
	const hasThreshold = useStoreState(state => state.electionOutput.hasThreshold);
	const editConfig = useStoreActions(actions => actions.editConfig);

	const toggle = () => {
		if(hasThreshold) {
			editConfig({ threshold: undefined });
		} else {
			editConfig({ threshold: 0 });
		}
	};

	const setThreshold = (n: number) => editConfig({ threshold: n / 100 });
	return (
		<Stack direction={"row"} alignItems={"center"}>
            Threshold:&nbsp;
			<Switch checked={hasThreshold} onChange={toggle}/>
			{hasThreshold && (
				<>
					<NumberField
						value={threshold! * 100}
						onChange={setThreshold}
						inputProps={{min: 0, max: 100}}
					/>% (0-100)
				</>
			)}
		</Stack>
	);
}