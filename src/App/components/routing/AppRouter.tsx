import MenuIcon from "@mui/icons-material/Menu";import {
	HashRouter,
	Navigate,
	Route,
	Routes,
	useNavigate
} from "react-router-dom";
import { AppBar, Box, CssBaseline, IconButton, Paper, Toolbar, Typography, styled } from "@mui/material";
import { appName } from "../../meta";
import ConfigPage from "../pages/ConfigPage";
import { AppNavLinks } from "./AppNavLinks";
import routes from "./routes";
import OutputPage from "../pages/OutputPage";
import { PartiesInputPage } from "../pages/PartiesInputPage";
import React from "react";


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
						<IconButton>
							<MenuIcon />
						</IconButton>

						<Brand />
						<AppNavLinks/>
					</Toolbar>
				</AppBar>
				<Content>
					<Routes>
						<Route path={routes.parties} element={<PartiesInputPage/>}/>
						<Route path={routes.config} element={<ConfigPage/>}/>
						<Route path={routes.output} element={<OutputPage/>}/>
						<Route path="*" element={<Fallback/>}/>
					</Routes>
				</Content>
			</Box>
		</HashRouter>
	);
}