import { Input } from "@mui/material";
import { useStoreState, useStoreActions } from "../../../../../store/store";
import { find } from "../../../../../util/id-array-operations";
import { PartyComponent } from "./party-component";
import React from "react";
import { MuiColorInput } from "mui-color-input";

const PartyColorEditor: PartyComponent = ({id}) => {
	
	const partyInput = useStoreState(state => find(state.electionInput.parties, id));
	const editParty = useStoreActions(state => state.editParty);
	const editColor = (color: string) => editParty({ id, color });

	return (
		<MuiColorInput style={{width: "10em"}} value={partyInput.color} onChange={editColor} />
	);
};

export default PartyColorEditor;