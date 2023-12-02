import { Input } from "@mui/material";
import { useStoreState, useStoreActions } from "../../../../store";
import { find } from "../../../../store/utils/id-array-operations";
import { PartyComponent } from "./party-field";
import React from "react";
import NumberField from "../../../../components/input/NumberField";

const PartySeatsOutput: PartyComponent = ({id}) => {
	
	const {seats} = useStoreState(state => find(state.output.parties, id));

	return (
		<>{seats}</>
	);
};

export default PartySeatsOutput;