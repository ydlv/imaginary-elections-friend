import { Input } from "@mui/material";
import { useStoreState, useStoreActions } from "../../../../store";
import { find } from "../../../../store/utils/id-array-operations";
import { PartyComponent } from "./party-field";
import React from "react";
import { MuiColorInput } from "mui-color-input";

const PartyColorEditor: PartyComponent = ({id}) => {
	
	const partyInput = useStoreState(state => find(state.input.parties, id));
	const editParty = useStoreActions(state => state.editParty);
	const editColor = (color: string) => editParty({ id, color });

	return (
		<MuiColorInput value={partyInput.color} onChange={editColor} />
	);
};

export default PartyColorEditor;