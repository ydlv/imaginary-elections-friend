import React from "react";
import DeletePartyButton from "./DeletePartyButton";
import MovePartyButton from "./MovePartyButton";
import { CardActionArea } from "@mui/material";

export default function PartyActionButtons({id}: {id: ID}) {
	return (<div style={{ display: "flex" }}>
		<DeletePartyButton id={id}/>
		<MovePartyButton id={id} direction="up"/>
		<MovePartyButton id={id} direction="down"/>
	</div>);
}