import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { StoreProvider } from "easy-peasy";
import { store } from "./store/store";
import React from "react";
import AppRouter from "./components/routing/AppRouter";
import { version } from "../meta";

function Main() {
	return (
		<>
			<StoreProvider store={store}>
				<ThemeProvider theme={theme}>
					<AppRouter/>
				</ThemeProvider>
			</StoreProvider>
			<footer>
				Version {version}
			</footer>
		</>
	);
}

export default Main;
