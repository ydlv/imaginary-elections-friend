import React from "react";
import { appName } from "../../meta";
import InputPanel from "../core/input/InputPanel";
import { Typography } from "@mui/material";


export default function Home() {
	return (
		<>
			<Typography typography={"h1"}> Welcome to {appName}!</Typography>
			<InputPanel/>
		</>
	);
}