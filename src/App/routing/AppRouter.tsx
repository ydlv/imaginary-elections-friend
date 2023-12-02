import HomePage from "../pages/Home";
import MenuIcon from "@mui/icons-material/Menu";
import { HashRouter, Route, Routes } from "react-router-dom";
import { AppBar, Box, CssBaseline, IconButton, Paper, Toolbar, Typography, styled } from "@mui/material";
import { appName } from "../../meta";
import ConfigPage from "../pages/ConfigPage";
import { AppNavLinks } from "./AppNavLinks";
import routes from "./routes";
import React from "react";
import OutputPage from "../pages/OutputPage";
import { PartiesInputPage } from "../pages/PartiesInputPage";



function Brand() {
	return (
		<Typography
			variant="h6"
			noWrap
			component="a"
			sx={{
				mr: 2,
				display: "flex",
				fontFamily: "monospace",
				fontWeight: 700,
				letterSpacing: ".8rem",
				color: "inherit",
				textDecoration: "none",
			}}
		>
			{appName}
		</Typography>
	);
}


const Content = styled(Paper)({
	padding: "2.5em"
});


export default function AppRouter() {
	return (
		<HashRouter>
			<Box>
				<CssBaseline />
				<AppBar position="sticky">
					<Toolbar>
						<IconButton>
							<MenuIcon />
						</IconButton>

						<Brand />
						<AppNavLinks/>
					</Toolbar>
				</AppBar>
				<Content>
					<Routes>
						<Route path={routes.home} element={<HomePage/>}/>
						<Route path={routes.parties} element={<PartiesInputPage/>}/>
						<Route path={routes.config} element={<ConfigPage/>}/>
						<Route path={routes.output} element={<OutputPage/>}/>
					</Routes>
				</Content>
			</Box>
		</HashRouter>
	);
}