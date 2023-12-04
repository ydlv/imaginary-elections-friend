import React from "react";
import { useStoreState } from "../../../../store/store";
import { find } from "../../../../util/id-array-operations";
import { PartyOutputModel } from "../../../../store/model/election-model";
import { PartyComponent } from "../input/parties/party-component";

export interface PartyOutputTemplate {
    (party: PartyOutputModel): React.ReactNode;
}

export default function createPartyOutputComponent(template: PartyOutputTemplate): PartyComponent {
	// eslint-disable-next-line react/display-name
	return ({id}) => {
		const party = useStoreState(state => find(state.electionOutput.parties, id));
		return (<>{template(party)}</>);
	};
}