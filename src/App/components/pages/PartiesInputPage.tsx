import React from "react";
import { Button, Grid, IconButton, Input, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import PartyNameEditor from "../core/elections/input/parties/PartyNameEditor";
import { PartyComponent } from "../core/elections/input/parties/party-component";
import PartyColorEditor from "../core/elections/input/parties/PartyColorEditor";
import PartyVotesEditor from "../core/elections/input/parties/PartyVotesEditor";
import PartyPercentsOutput from "../core/elections/output/PartyPercentsOutput";
import { PartyTable } from "../core/elections/output/PartyTable";
import createPartyOutputComponent from "../core/elections/output/party-output";

import { Add } from "@material-ui/icons";
import DeletePartyButton from "../core/elections/input/parties/DeletePartyButton";
import { TurnoutOutput } from "../core/turnout/TurnoutOutput";
import ParliamentChart from "../core/charts/ParliamentChart";
import PopularVoteChart from "../core/charts/PopularVoteChart";
import OutputPreview from "../core/elections/output/OutputPreview";
import { useStoreActions } from "../../store/store";


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
				<OutputPreview/>
			</Grid>
		</Grid>
	);
}