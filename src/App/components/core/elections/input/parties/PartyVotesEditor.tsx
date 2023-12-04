import { Button, Input } from "@mui/material";
import { useStoreState, useStoreActions } from "../../../../../store/store";
import { find } from "../../../../../util/id-array-operations";
import { PartyComponent } from "./party-component";
import React, { useState } from "react";
import NumberField from "../../../../../components/utils/input/NumberField";
import { Add, Remove, TransferWithinAStation,  } from "@material-ui/icons";
import ChangeVoters from "../../../../modals/ChangeVoters";
import { ChangeVotersPayload } from "../../../../modals/action-types";

const PartyVotesEditor: PartyComponent = ({id}) => {
	
	const partyInput = useStoreState(state => find(state.electionInput.parties, id));
	const editParty = useStoreActions(state => state.editParty);
	const editVotes = (votes: number) => editParty({ id, votes });
	const showModal = useStoreActions(state => state.change.openModal);

	return (
		<div style={{display: "flex"}}>
			<NumberField value={partyInput.votes} onChange={editVotes} 
				inputProps={{ min: 0 }} />
			<Button variant="outlined" onClick={() => showModal({ partyId: id })}>
				<Add/> / <Remove/>
			</Button>
		</div>
	);
};

export default PartyVotesEditor;