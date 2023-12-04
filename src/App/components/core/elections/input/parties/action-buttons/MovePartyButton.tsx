import { IconButton } from "@mui/material";
import { DeleteForever } from "@mui/icons-material";
import { useStoreActions, useStoreState } from "../../../../../../store/store";
import { PartyComponent } from "../party-component";
import React, { useState } from "react";
import DeleteConfirm from "../../../../../modals/DeleteConfirm";
import { findIndex } from "../../../../../../util/id-array-operations";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";


export default function MovePartyButton({ id, direction }: {id: ID, direction: "up" | "down"}) {
	const parties = useStoreState(state => state.electionInput.parties);
	const i = findIndex(parties, id);
	const len = parties.length;
	const canMove = !(i == 0 && direction == "up" || i == len - 1 && direction == "down");
	const moveParty = useStoreActions(state => state.moveParty);
	
	return (
		<>
			{canMove && (<>
				<IconButton onClick={() => moveParty({ id, direction })}>
					{ direction == "up" ? <ArrowUpward/> : <ArrowDownward/> }
				</IconButton>
			</>)}
		</>
	);
}
