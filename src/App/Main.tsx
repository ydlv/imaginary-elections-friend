import { AppBar, Box, Button, CssBaseline, IconButton, Paper, ThemeProvider, Toolbar, Typography, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { theme } from "./theme";
import { appName } from "../meta";
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

function Main() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Box>
					<CssBaseline />
					<AppBar position="sticky">
						<Toolbar>
							<IconButton>
								<MenuIcon />
							</IconButton>

							<Brand />
							{"links will be here later".split(" ").map((x, i) => (
								<Button color="inherit" key={i}>{x}</Button>
							))}
						</Toolbar>
					</AppBar>
					<Content>
						App here
					</Content>
				</Box>
			</ThemeProvider>
		</>
	);
}

export default Main;
