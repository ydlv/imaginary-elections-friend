import { IconButton } from "@mui/material";
import { DeleteForever } from "@mui/icons-material";
import { useStoreActions, useStoreState } from "../../../../../../store/store";
import { PartyComponent } from "../party-component";
import React, { useState } from "react";
import DeleteConfirm from "../../../../../modals/DeleteConfirm";


const DeletePartyButton: PartyComponent = ({ id }) => {
	const canRemove = useStoreState(state => state.electionInput.parties.length > 2);
	const removeParty = useStoreActions(state => state.removeParty);
	const [isOpen, setOpen] = useState(false);
	const onClosed = (sure: boolean) => {
		if (sure) {
			removeParty(id);
		}
		else {
			setOpen(false);
		}
	};
	return (
		<>
			{canRemove && (<>
				<IconButton onClick={() => setOpen(true)}>
					<DeleteForever />
				</IconButton>
				<DeleteConfirm show={isOpen} closed={onClosed} id={id} />
			</>)}
		</>
	);
};

export default DeletePartyButton;