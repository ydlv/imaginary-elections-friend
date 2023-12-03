import React from "react";
import { useStoreActions, useStoreState } from "../store/store";
import { Button, Grid, IconButton, Input, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

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
import ParliamentChart from "../core/charts/ParliamentChart";
import PopularVoteChart from "../core/charts/PopularVoteChart";


const fields: [string, PartyComponent][] = [
	["Color", PartyColorEditor],
	["Name", PartyNameEditor],
	["Votes", PartyVotesEditor],
	["Seats", createPartyOutputComponent(output => output.seats)],
	["%", PartyPercentsOutput],
	["Delete", DeletePartyButton]
];

const padded = {padding: "1em"};

export function PartiesInputPage() {
	const addParty = useStoreActions(state => state.addParty);
	return (
		<Grid container>
			<Grid item xs={8} style={padded}>
				<PartyTable fields={fields} />
				<IconButton onClick={() => addParty()}>
					<Add/>
				</IconButton>
				<TurnoutOutput/>
			</Grid>
			<Grid item xs={4} style={padded}>
				<PopularVoteChart height={300} width={300}
					slotProps={{ legend: { hidden: true } }} />
			
				<ParliamentChart height={300} width={300}
					slotProps={{ legend: { hidden: true } }} />
			</Grid>
		</Grid>
	);
}