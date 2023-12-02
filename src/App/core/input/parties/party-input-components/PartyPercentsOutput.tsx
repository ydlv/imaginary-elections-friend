import { Input } from "@mui/material";
import { useStoreState, useStoreActions } from "../../../../store";
import { find } from "../../../../store/utils/id-array-operations";
import { PartyComponent as PartyComponent } from "./party-field";
import React from "react";
import NumberField from "../../../../components/input/NumberField";
import { Percents } from "../../../../components/utils/react-utils";

const PartyPercentsOutput: PartyComponent = ({id}) => {
	
	const {percentage} = useStoreState(state => find(state.output.parties, id));

	return (
		<Percents number={percentage} fractionDigits={2} />
	);
};

export default PartyPercentsOutput;