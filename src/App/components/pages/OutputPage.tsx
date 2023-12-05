import React from "react";
import { Grid, Typography } from "@mui/material";
import { PartyTable } from "../core/elections/output/PartyTable";
import { PartyComponent } from "../core/elections/input/parties/party-component";
import createPartyOutputComponent from "../core/elections/output/party-output";
import PartyPercentsOutput from "../core/elections/output/PartyPercentsOutput";
import { TurnoutOutput } from "../core/turnout/TurnoutOutput";
import PopularVoteChart from "../core/charts/PopularVoteChart";
import ParliamentChart from "../core/charts/ParliamentChart";
import NotExactAlert from "../core/elections/output/NotExactAlert";
import { VotersAmount } from "../core/elections/output/VotersAmount";
import { useStoreState } from "../../store/store";
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
	const output = useStoreState(state => state.electionOutput);
	return (
		<Grid container>
			<Grid item xs={12}>
				<NotExactAlert />
			</Grid>
			<Grid item xs={7} style={padded}>
				<TurnoutOutput />
				<p>{output.neededForMajority} / {output.seats} needed for majority</p>
				<PartyTable fields={fields} />
			</Grid>
			<Grid item xs={5} style={padded}>
				<div>
					<VotersAmount/>
				</div>
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