import React from "react";
import { useStoreActions, useStoreState } from "../store/store";
import { Button, IconButton, Input, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import PartyNameEditor from "../core/elections/input/PartyNameEditor";
import { PartyComponent } from "../core/elections/input/party-component";
import PartyColorEditor from "../core/elections/input/PartyColorEditor";
import PartyVotesEditor from "../core/elections/input/PartyVotesEditor";
import PartyPercentsOutput from "../core/elections/output/PartyPercentsOutput";
import { PartyTable } from "../components/PartyTable";
import createPartyOutputComponent from "../core/elections/output/party-output";

import { Add } from "@material-ui/icons";
import DeletePartyButton from "../core/elections/input/DeletePartyButton";
import { TurnoutOutput } from "../core/turnout/TurnoutOutput";


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
			<TurnoutOutput/>
		</>
	);
}