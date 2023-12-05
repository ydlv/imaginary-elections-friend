import MenuIcon from "@mui/icons-material/Menu";import {
	HashRouter,
	Navigate,
	Route,
	Routes,
	useNavigate
} from "react-router-dom";
import { AppBar, Box, CssBaseline, Grid, IconButton, Paper, Stack, Toolbar, Typography, styled } from "@mui/material";

import ConfigPage from "../pages/ConfigPage";
import { AppNavLinks } from "./AppNavLinks";
import routes from "./routes";
import OutputPage from "../pages/OutputPage";
import { PartiesInputPage } from "../pages/PartiesInputPage";
import React from "react";
import { appName } from "../../../meta";
import AboutPage from "../pages/AboutPage";
import "@fontsource/caveat";

function Brand() {
	return (
		<Stack direction="row" spacing={0} alignItems={"center"}>
			<img src="/circle_logo.png" style={{height: "5em"}} />
			<span style={{fontFamily: "caveat", paddingRight: "2em", fontSize: "xx-large"}}>{appName}</span>
		</Stack>
	);
}


const Content = styled(Paper)({
	padding: "2.5em"
});

const Fallback = () => {
	return <Navigate to={routes.parties}/>;
};

export default function AppRouter() {
	return (
		<HashRouter>
			<Box>
				<CssBaseline />
				<AppBar position="sticky">
					<Toolbar>
						<Brand />
						<AppNavLinks/>
					</Toolbar>
				</AppBar>
				<Content>
					<Routes>
						<Route path={routes.parties} element={<PartiesInputPage/>}/>
						<Route path={routes.config} element={<ConfigPage/>}/>
						<Route path={routes.output} element={<OutputPage/>}/>
						<Route path={routes.about} element={<AboutPage/>}/>
						<Route path="*" element={<Fallback/>}/>
					</Routes>
				</Content>
			</Box>
		</HashRouter>
	);
}