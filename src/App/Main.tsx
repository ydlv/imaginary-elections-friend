import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { StoreProvider } from "easy-peasy";
import { store } from "./store";
import AppRouter from "./routing/AppRouter";

import React from "react";

function Main() {
	return (
		<>
			<StoreProvider store={store}>
				<ThemeProvider theme={theme}>
					<AppRouter/>
				</ThemeProvider>
			</StoreProvider>
		</>
	);
}

export default Main;
