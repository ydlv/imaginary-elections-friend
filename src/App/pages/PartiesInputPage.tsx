import React from "react";
import { useStoreActions, useStoreState } from "../store";
import { Input, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { PartyInput } from "../store/model";
import PartyNameEditor from "../core/input/parties/party-input-components/PartyNameEditor";
import { PartyComponent } from "../core/input/parties/party-input-components/party-component";
import PartyColorEditor from "../core/input/parties/party-input-components/PartyColorEditor";
import PartyVotesEditor from "../core/input/parties/party-input-components/PartyVotesEditor";
import PartyPercentsOutput from "../core/input/parties/output/PartyPercentsOutput";
import { PartyTable } from "../components/PartyTable";
import createPartyOutputComponent from "../core/input/parties/output/party-output";

export interface PartyInputTableProps {
	fields?: [string, PartyComponent][];
}

const fields: [string, PartyComponent][] = [
	["Color", PartyColorEditor],
	["Name", PartyNameEditor],
	["Votes", PartyVotesEditor],
	["Seats", createPartyOutputComponent(output => output.seats)],
	["%", PartyPercentsOutput]
];

export function PartiesInputPage(props: PartyInputTableProps) {
	return (
		<PartyTable fields={fields} />
	);
}