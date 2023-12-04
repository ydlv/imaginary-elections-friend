import { Input } from "@mui/material";
import { useStoreState, useStoreActions } from "../../../../../store/store";
import { find } from "../../../../../util/id-array-operations";
import { PartyComponent } from "./party-component";
import React from "react";
import NumberField from "../../../../../components/utils/input/NumberField";

const PartyVotesEditor: PartyComponent = ({id}) => {
	
	const partyInput = useStoreState(state => find(state.electionInput.parties, id));
	const editParty = useStoreActions(state => state.editParty);
	const editVotes = (votes: number) => editParty({ id, votes });

	return (
		<NumberField value={partyInput.votes} onChange={editVotes} 
			inputProps={{ min: 0 }} />
	);
};

export default PartyVotesEditor;