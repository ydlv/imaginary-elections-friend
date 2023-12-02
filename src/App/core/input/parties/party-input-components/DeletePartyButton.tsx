import { IconButton, Input } from "@mui/material";
import { DeleteForever } from "@mui/icons-material";
import { useStoreState, useStoreActions } from "../../../../store";
import { find } from "../../../../store/utils/id-array-operations";
import { PartyComponent } from "./party-component";

import React from "react";


const DeletePartyButton: PartyComponent = ({ id }) => {
	const removeParty = useStoreActions(state => state.removeParty);

	return (
		<IconButton onClick={() => removeParty(id)}>
			<DeleteForever/>
		</IconButton>
	);
};

export default DeletePartyButton;