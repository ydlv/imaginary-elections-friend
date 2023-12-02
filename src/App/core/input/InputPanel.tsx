import React from "react";
import ConfigBox from "./config/ConfigBox";
import { Grid } from "@mui/material";
import { PartiesInputTable } from "./parties/PartiesInputTable";
import { useStoreActions, useStoreState } from "../../store";

export default function InputPanel() {
	return (
		<>
			<Grid container>
				<Grid item xs={4}>
					<ConfigBox/>
				</Grid>
				<Grid item xs={8}>
					<PartiesInputTable />
				</Grid>
			</Grid>
		</>
	);
}