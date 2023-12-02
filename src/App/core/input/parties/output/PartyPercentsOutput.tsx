import { PartyComponent as PartyComponent } from "../party-input-components/party-component";
import React from "react";
import { Percents } from "../../../../components/utils/react-utils";
import createPartyOutputComponent from "./party-output";

const PartyPercentsOutput: PartyComponent = createPartyOutputComponent(output => (
	<Percents number={output.percentage} fractionDigits={2} />
));

export default PartyPercentsOutput;