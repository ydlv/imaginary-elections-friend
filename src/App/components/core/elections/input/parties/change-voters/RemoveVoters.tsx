import React from "react";

import { createChangeVotersComponent } from "./create-change-voters-components";
import { PieChart } from "@mui/x-charts";
import { add } from "../../../../../../util/fp";
import NumberField from "../../../../../utils/input/NumberField";
import { Stack } from "@mui/material";

const RemoveVoters = createChangeVotersComponent(data => {
	
	const onFieldChange = (n: number) => {
		data.setPayload({ type: "remove", amount: n });
	};

	const currentPartyVotes = data.selectedParty.votes;
	const otherVotes = data.parties.map(x => x.votes).reduce(add, 0) - currentPartyVotes;
	const removedVoters = data.state.remove.amount;

	return (
		<div>
			<Stack direction={"row"} alignItems={"center"}>
				<span>Votes to remove from {data.selectedParty.name}: &nbsp;</span>
				<NumberField value={removedVoters}
					onChange={onFieldChange}
					inputProps={{min: 0, max: currentPartyVotes}} />
			</Stack>
			<div>
				<PieChart width={800} height={150} series={[{
					data: [
						{ value: currentPartyVotes - removedVoters, label: `votes that will remain for ${data.selectedParty.name}` },
						{ value: removedVoters, label: "removed votes" },
						{ value: otherVotes, label: "votes for other parties"  }
					]
				}]}/>
			</div>
		</div>
	);
});


export default RemoveVoters;
