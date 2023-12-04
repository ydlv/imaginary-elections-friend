import React from "react";
import ParliamentChart from "../../charts/ParliamentChart";
import PopularVoteChart from "../../charts/PopularVoteChart";
import NotExactAlert from "./NotExactAlert";


export default function OutputPreview({size}: {size?: number}) {
	size = size || 300;
	return (
		<>
			<NotExactAlert/>
			<PopularVoteChart height={size} width={size}
				slotProps={{ legend: { hidden: true } }} />
			
			<ParliamentChart height={size} width={size}
				slotProps={{ legend: { hidden: true } }} />
		</>
	);
}