import React from "react";
import ParliamentChart from "../../charts/ParliamentChart";
import PopularVoteChart from "../../charts/PopularVoteChart";
import NotExactAlert from "./NotExactAlert";
import { VotersAmount } from "./VotersAmount";


export default function OutputPreview({size}: {size?: number}) {
	size = size || 300;
	return (
		<>
			<NotExactAlert/>
			<p><VotersAmount/></p>
			<PopularVoteChart height={size} width={size}
				slotProps={{ legend: { hidden: true } }} />
			
			<ParliamentChart height={size} width={size}
				slotProps={{ legend: { hidden: true } }} />
		</>
	);
}