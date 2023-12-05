
import styled from "@emotion/styled";
import { Paper, useTheme } from "@mui/material";


const StackItem = styled(Paper)(() => ({
	backgroundColor: "#fff",

	textAlign: "center",
	flexGrow: 1,
}));

export default StackItem;