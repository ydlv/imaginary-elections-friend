import { Input } from "@mui/material";
import { useStoreState, useStoreActions } from "../../../../store";
import { find } from "../../../../store/utils/id-array-operations";
import { PartyComponent } from "./party-component";
import React from "react";
import NumberField from "../../../../components/input/NumberField";

const PartyVotesEditor: PartyComponent = ({id}) => {
	
	const partyInput = useStoreState(state => find(state.input.parties, id));
	const editParty = useStoreActions(state => state.editParty);
	const editVotes = (votes: number) => editParty({ id, votes });

	return (
		<NumberField value={partyInput.votes} onChange={editVotes} />
	);
};

export default PartyVotesEditor;