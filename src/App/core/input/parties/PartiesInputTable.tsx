import React from "react";
import { useStoreActions, useStoreState } from "../../../store";
import { Input, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { PartyInput } from "../../../store/model";
import PartyNameEditor from "./party-input-components/PartyNameEditor";
import { PartyComponent } from "./party-input-components/party-field";
import PartyColorEditor from "./party-input-components/PartyColorEditor";
import PartyVotesEditor from "./party-input-components/PartyVotesEditor";
import PartySeatsOutput from "./party-input-components/PartySeatsOutput";
import PartyPercentsOutput from "./party-input-components/PartyPercentsOutput";

export interface PartyInputTableProps {
	fields?: [string, PartyComponent][];
}

const defaultFields: [string, PartyComponent][] = [
	["Color", PartyColorEditor],
	["Name", PartyNameEditor],
	["Votes", PartyVotesEditor],
	["Seats", PartySeatsOutput],
	["%", PartyPercentsOutput]
];

export function PartiesInputTable(props: PartyInputTableProps) {
	const parties = useStoreState(state => state.input.parties);
	const fields = props.fields || defaultFields;
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						{fields.map(([name, _]) => <TableCell key={name}>{name}</TableCell>)}
					</TableRow>
				</TableHead>
				<TableBody>
					{parties.map(party => (
						<TableRow key={party.id}>
							{fields.map(([name, Field]) => (<TableCell key={name}>
								<Field id={party.id} />
							</TableCell>))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}