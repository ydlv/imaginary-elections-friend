import React from "react";
import { useStoreState } from "../../store";
import { PartyOutput } from "../../store/model";
import { find } from "../../store/utils/id-array-operations";
import { PartyComponent } from "../input/parties/party-input-components/party-component";

export interface PartyOutputTemplate {
    (party: PartyOutput): React.ReactNode;
}

export default function createPartyOutputComponent(template: PartyOutputTemplate): PartyComponent {
	// eslint-disable-next-line react/display-name
	return ({id}) => {
		const party = useStoreState(state => find(state.output.parties, id));
		return (<>{template(party)}</>);
	};
}