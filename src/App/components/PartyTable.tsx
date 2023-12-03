import { useStoreState } from "../store/store";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { PartyComponent } from "../core/elections/input/party-component";
import React from "react";

export interface PartyTableProps {
	fields: [string, PartyComponent][];
}

export function PartyTable({fields}: PartyTableProps) {
	const parties = useStoreState(state => state.electionInput.parties);
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