/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from "react";
import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Modal, Select, Stack } from "@mui/material";
import { ApportionmentMethodName, HighLow, methodHumanName } from "../../../../../store/model/apportionment-method";
import { useStoreActions, useStoreState } from "../../../../../store/store";
import { Check, QuestionMarkOutlined, QuestionMarkRounded, QuestionMarkSharp } from "@mui/icons-material";
import { modalContentStyle } from "../../../../modals/modal-style";
import HighLowExplanation from "../../../../explanations/HighLowExplanation";
import { Help } from "@material-ui/icons";

export default function HighLowSelector() {
	const isDivisorMethod = useStoreState(state => state.electionOutput.isDivisorMethod);
	const ifNotExact = useStoreState(state => state.electionInput.config.ifNotExact);
	const editConfig = useStoreActions(state => state.editConfig);
	const [isModalOpen, setModalOpen] = useState(false);
	return (<>{isDivisorMethod && (
		<Stack direction={"row"} alignItems={"center"}>
			
			{"If no exact result found: "}&nbsp;
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
			
			<IconButton onClick={() => setModalOpen(true)} 
				color={"primary"}
			>
				<Help/>
			</IconButton>
			
		</Stack>
	)}
	<Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
		<Box sx={modalContentStyle}>
			<HighLowExplanation/>
			<div style={{paddingTop: "3em"}}>
				<Button variant="contained"  onClick={() => setModalOpen(false)}>
					<Check/>&nbsp; OK
				</Button>
			</div>
		</Box>
	</Modal>
	</>);
}