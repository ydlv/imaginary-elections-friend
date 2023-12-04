import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { StoreProvider } from "easy-peasy";
import { store } from "./store/store";
import React from "react";
import AppRouter from "./components/routing/AppRouter";

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
