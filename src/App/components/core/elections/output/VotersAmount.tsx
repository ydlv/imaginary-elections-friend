import React from "react";
import { useStoreState } from "../../../../store/store";


export function VotersAmount() {
	const totalVotes = useStoreState(state => state.electionOutput.totalVotes);
	return <>Total votes: {totalVotes}</>;
}