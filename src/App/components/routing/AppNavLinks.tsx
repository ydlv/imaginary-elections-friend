import { Button, useTheme } from "@mui/material";
import React from "react";
import routes from "./routes";
import { Link } from "react-router-dom";

const links: [keyof typeof routes, React.ReactNode][] = [
	["about", "About"],
	["config", "Config"],
	["parties", "Define parties"],
	["output", "Results"]
];

export function AppNavLinks() {
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