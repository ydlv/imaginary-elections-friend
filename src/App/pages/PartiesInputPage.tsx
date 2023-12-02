import React from "react";
import { useStoreActions, useStoreState } from "../store";
import { Button, IconButton, Input, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { PartyInput } from "../store/model";
import PartyNameEditor from "../core/input/parties/party-input-components/PartyNameEditor";
import { PartyComponent } from "../core/input/parties/party-input-components/party-component";
import PartyColorEditor from "../core/input/parties/party-input-components/PartyColorEditor";
import PartyVotesEditor from "../core/input/parties/party-input-components/PartyVotesEditor";
import PartyPercentsOutput from "../core/output/PartyPercentsOutput";
import { PartyTable } from "../components/PartyTable";
import createPartyOutputComponent from "../core/output/party-output";

import { Add } from "@material-ui/icons";
import DeletePartyButton from "../core/input/parties/party-input-components/DeletePartyButton";


const fields: [string, PartyComponent][] = [
	["Color", PartyColorEditor],
	["Name", PartyNameEditor],
	["Votes", PartyVotesEditor],
	["Seats", createPartyOutputComponent(output => output.seats)],
	["%", PartyPercentsOutput],
	["Delete", DeletePartyButton]
];

export function PartiesInputPage() {
	const addParty = useStoreActions(state => state.addParty);
	return (
		<>
			<PartyTable fields={fields} />
			<IconButton onClick={() => addParty()}>
				<Add/>
			</IconButton>
		</>
	);
}