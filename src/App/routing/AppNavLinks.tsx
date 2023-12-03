import { Button, useTheme } from "@mui/material";
import React from "react";
import routes from "./routes";
import { Link } from "react-router-dom";

const links: [keyof typeof routes, React.ReactNode][] = [
	["config", "config"],
	["parties", "input parties"],
	["output", "results"]
];

export function AppNavLinks() {
	const theme = useTheme();
	return (
		<>
			{links.map(([k, link], i) => (
				<Link to={routes[k]} key={i}>
					<Button color="info" style={{color: "white"}}>
						{link}
					</Button>
				</Link>
			))}
		</>
	);
}