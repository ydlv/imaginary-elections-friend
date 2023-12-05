import React from "react";
import { useStoreState } from "../../../../store/store";
import { HighLow } from "../../../../store/model/apportionment-method";
import { Alert } from "@mui/material";
import { Link } from "react-router-dom";
import routes from "../../../routing/routes";

function Template(props: {highLow: HighLow, actualSeats: number, prefferedSeats: number}) {
	return (
		<Alert severity={"warning"}>
			{"No exact apportionment found. As per your "}
			<Link to={routes.config}>preferences</Link>,
            an apportionment with a {props.highLow}er numbre of seats was found.
            This apportionment has {props.actualSeats} seats instead of {props.prefferedSeats}.
		</Alert>
	);
}

export default function NotExactAlert() {
	const resultApproximation = useStoreState(state => state.electionOutput.resultApproximation);
	const actualSeats = useStoreState(state => state.electionOutput.seats);
	const prefferedSeats = useStoreState(state => state.electionInput.config.seatsTotal);
	return (
		<>
			{ (resultApproximation == "high" || resultApproximation == "low") &&
            <Template actualSeats={actualSeats} prefferedSeats={prefferedSeats} highLow={resultApproximation}/>
			}
		</>
	);
}