import React from "react";
import { useStoreState } from "../../../store/store";
import { find } from "../../../store/utils/id-array-operations";
import { PartyComponent } from "../input/party-component";
import { PartyOutput } from "../../../store/model/election-model";

export interface PartyOutputTemplate {
    (party: PartyOutput): React.ReactNode;
}

export default function createPartyOutputComponent(template: PartyOutputTemplate): PartyComponent {
	// eslint-disable-next-line react/display-name
	return ({id}) => {
		const party = useStoreState(state => find(state.electionOutput.parties, id));
		return (<>{template(party)}</>);
	};
}