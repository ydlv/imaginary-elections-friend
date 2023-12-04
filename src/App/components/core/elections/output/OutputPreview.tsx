import React from "react";
import ParliamentChart from "../../charts/ParliamentChart";
import PopularVoteChart from "../../charts/PopularVoteChart";


export default function OutputPreview({size}: {size?: number}) {
	size = size || 300;
	return (
		<>
			<PopularVoteChart height={size} width={size}
				slotProps={{ legend: { hidden: true } }} />
			
			<ParliamentChart height={size} width={size}
				slotProps={{ legend: { hidden: true } }} />
		</>
	);
}