import { Input } from "@mui/material";
import { useStoreState, useStoreActions } from "../../../../store";
import { find } from "../../../../store/utils/id-array-operations";
import { PartyComponent } from "./party-field";

import React from "react";


const PartyNameEditor: PartyComponent = ({ id }) => {
	const partyInput = useStoreState(state => find(state.input.parties, id));
	const editParty = useStoreActions(state => state.editParty);
	const editName = (name: string) => editParty({ id, name });

	return (
		<Input value={partyInput.name} onChange={e => editName(e.target.value)} />
	);
};

export default PartyNameEditor;