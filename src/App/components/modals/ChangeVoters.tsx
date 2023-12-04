import { Box, Button, MenuItem, Modal, Select } from "@mui/material";
import { modalContentStyle } from "./modal-style";
import React, { useState } from "react";
import { find } from "../../util/id-array-operations";
import { useStoreState, useStoreActions } from "../../store/store";
import AddVoters from "../core/elections/input/parties/change-voters/AddVoters";
import RemoveVoters from "../core/elections/input/parties/change-voters/RemoveVoters";
import { ActionType, AddVotersPayload, ChangeVotersPayload, MoveVotersPayload, RemoveVotersPayload, } from "./action-types";
import { Cancel, Check } from "@material-ui/icons";
import MoveVoters from "../core/elections/input/parties/change-voters/MoveVoters";



export default function ChangeVoters() {
	const change = useStoreState(state => state.change);
	const changeAction = useStoreActions(state => state.change.setAction);
	const cancel = useStoreActions(state => state.change.closeModal);
	const commit = useStoreActions(state => state.commitChange);

	const partyId = change.selectedParty;
	const partyName = useStoreState(state => find(state.electionInput.parties, partyId).name);

	return (
		<Modal open={change.modalOpen}>
			<Box sx={modalContentStyle}>
				<Select value={change.selectedAction} onChange={e => changeAction(e.target.value as ActionType)}>
					<MenuItem value={"add"}>Add voters to {partyName}</MenuItem>
					<MenuItem value={"remove"}>remove voters from {partyName}</MenuItem>
				</Select>
				<hr />
				{
					change.selectedAction == "add" ? <AddVoters /> :
						change.selectedAction == "remove" ? <RemoveVoters /> :
							<MoveVoters/>
				}
				<hr />
				<Button variant="outlined" color="success" onClick={commit}
					disabled={change.selectedAction == "move" && change.move.targetParty == change.selectedParty}>
					<Check/>&nbsp;Do it</Button>
				<Button variant="outlined" color="secondary"
					onClick={cancel}>
					<Cancel />&nbsp;Cancel
				</Button>
			</Box>
		</Modal>
	);
}