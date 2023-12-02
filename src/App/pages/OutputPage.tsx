import React from "react";
import { appName } from "../../meta";
import { Grid, Typography } from "@mui/material";
import { PartyTable } from "../components/PartyTable";
import { PartyComponent } from "../core/input/parties/party-input-components/party-component";
import createPartyOutputComponent from "../core/output/party-output";
import PartyPercentsOutput from "../core/output/PartyPercentsOutput";
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

export default function OutputPage() {
	return (
		<Grid container>
			<Grid item xs={6}>

			</Grid>
			<Grid item xs={6}>
				<PartyTable fields={fields} />
			</Grid>
		</Grid>
	);
}