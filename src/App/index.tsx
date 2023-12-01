import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { theme } from "./theme";

function App() {
	return (
		<>
			<CssBaseline/>
			<ThemeProvider theme={theme}>
        Set up default theme
			</ThemeProvider>
		</>
	);
}

export default App;
