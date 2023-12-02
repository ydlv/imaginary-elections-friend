import React from "react";
import { appName } from "../../meta";
import { Typography } from "@mui/material";
import { PartiesInputPage } from "./PartiesInputPage";


export default function HomePage() {
	return (
		<>
			<Typography typography={"h1"}> Welcome to {appName}!</Typography>
		</>
	);
}