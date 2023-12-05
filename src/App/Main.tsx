import { Box, Button, Modal, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { StoreProvider } from "easy-peasy";
import { store } from "./store/store";
import React, { useEffect, useState } from "react";
import AppRouter from "./components/routing/AppRouter";
import { version } from "../meta";
import { modalContentStyle } from "./components/modals/modal-style";

function Main() {
	const [width, setWidth] = useState<number>(window.innerWidth);

	function handleWindowSizeChange() {
		setWidth(window.innerWidth);
	}
	useEffect(() => {
		window.addEventListener("resize", handleWindowSizeChange);
		return () => {
			window.removeEventListener("resize", handleWindowSizeChange);
		};
	}, []);

	const isMobile = width <= 768;
	console.log({isMobile});
	const [showModal, setShowModal] = useState(isMobile);

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
			<Modal open={showModal}>
				<Box sx={modalContentStyle}>
					<p>
						{"You seem to be on a mobile phone. Mobile phones are not yet supported on this app, but may"}
						{" be in the future. Sorry about that."}</p>
					<p>{"You can still view the app, but it probably won't work."}</p>
					<Button variant="contained" color="error"
						onClick={() => setShowModal(false)}
					>View app anyway</Button>
				</Box>
			</Modal>
		</>
	);
}

export default Main;
