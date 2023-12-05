import React from "react";
import ParliamentChart from "../../charts/ParliamentChart";
import PopularVoteChart from "../../charts/PopularVoteChart";
import NotExactAlert from "./NotExactAlert";
import { VotersAmount } from "./VotersAmount";
import { Stack } from "@mui/material";
import { TurnoutOutput } from "../../turnout/TurnoutOutput";


export default function OutputPreview({ size }: { size?: number }) {
	size = size || 300;
	return (
		<Stack>
			<NotExactAlert />
			<p><VotersAmount /></p>
			<p>
				<TurnoutOutput/>
			</p>
			<div>
				<PopularVoteChart height={size} width={size}
					slotProps={{ legend: { hidden: true } }} />
			</div>
			<div>
				<ParliamentChart height={size} width={size}
					slotProps={{ legend: { hidden: true } }} />
			</div>
		</Stack>
	);
}