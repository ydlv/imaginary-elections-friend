import { Box, Button, FormGroup, Icon, Modal } from "@mui/material";
import React from "react";
import { find } from "../../util/id-array-operations";
import { useStoreState } from "../../store/store";
import { DeleteForever } from "@material-ui/icons";
import { modalContentStyle } from "./modal-style";

export default function DeleteConfirm({id, show, closed}: { id: ID, show: boolean, closed: (sure: boolean) => unknown }) {
	const parties = useStoreState(state => state.electionInput.parties);
	const party = find(parties, id);

	return (
		<Modal open={show} onClose={() => closed(false)} >
			<Box sx={modalContentStyle}>
				<h3><Icon><DeleteForever/></Icon>{" are you sure?"}</h3>
				<p>Are you sure you want to delete {party.name}? This cannot be undone.</p>
				<Button onClick={() => closed(true)} variant="contained" color="error">
					<Icon><DeleteForever/></Icon>{" yes, delete"}
				</Button>
				{" "}
				<Button onClick={() => closed(false)} variant="contained" color="success">
                    actually, no
				</Button>
			</Box>
		</Modal>
	);
}