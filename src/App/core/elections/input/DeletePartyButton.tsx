import { IconButton } from "@mui/material";
import { DeleteForever } from "@mui/icons-material";
import { useStoreActions } from "../../../store/store";
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