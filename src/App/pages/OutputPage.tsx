import React from "react";
import { appName } from "../../meta";
import { Grid, Typography } from "@mui/material";
import { PartyTable } from "../components/PartyTable";
import { PartyComponent } from "../core/elections/input/parties/party-component";
import createPartyOutputComponent from "../core/elections/output/party-output";
import PartyPercentsOutput from "../core/elections/output/PartyPercentsOutput";
import { TurnoutOutput } from "../core/turnout/TurnoutOutput";
import PopularVoteChart from "../core/charts/PopularVoteChart";
import ParliamentChart from "../core/charts/ParliamentChart";
const containerStyle = {
	display: "flex",
	alignItems: "center", // Center items vertically
};

const squareStyle = {
	width: "2em", // Adjust the width of the square as needed
	height: "2em", // Make it a square
	marginRight: "0.5em", // Adjust spacing between name and square
};

const fields: [string, PartyComponent][] = [
	["name", createPartyOutputComponent(party => (
		<div style={containerStyle}>
			<div style={{ ...squareStyle, backgroundColor: party.color }}></div>
			{" "}
			{party.name}
		</div>
	))],
	["seats", createPartyOutputComponent(party => party.seats)],
	["votes", createPartyOutputComponent(party => party.votes)],
	["%", PartyPercentsOutput],

];

const padded = { padding: "4em" };

export default function OutputPage() {
	return (
		<Grid container>
			<Grid item xs={7} style={padded}>
				<TurnoutOutput />
				<PartyTable fields={fields} />
			</Grid>
			<Grid item xs={5} style={padded}>
				<div >
					<Typography component={"h2"}>Popular vote</Typography>
					<PopularVoteChart height={400} width={400}
						slotProps={{ legend: { hidden: true } }} />
				</div>
				<div >
					<Typography component={"h2"}>Parliament seats</Typography>
					<ParliamentChart height={400} width={400}
						slotProps={{ legend: { hidden: true } }} />
				</div>
			</Grid>
		</Grid>
	);
}