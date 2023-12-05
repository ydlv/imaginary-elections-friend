import NumberField from "../../../../../utils/input/NumberField";
import { PieChart } from "@mui/x-charts";
import { createChangeVotersComponent } from "./create-change-voters-components";
import React from "react";
import { add } from "../../../../../../util/fp";

const AddVoters = createChangeVotersComponent(data => {
	
	const onFieldChange = (n: number) => {
		data.setPayload({ type: "add", amount: n });
	};

	const currentPartyVotes = data.selectedParty.votes;
	const otherVotes = data.parties.map(x => x.votes).reduce(add, 0) - currentPartyVotes;

	return (
		<div>
			<div>
				<span>Votes to add to {data.selectedParty.name}: &nbsp;</span>
				<NumberField value={data.state.add.amount}
					onChange={onFieldChange}
					inputProps={{min: 0}} />
			</div>
			<div>
				<PieChart width={800} height={150} series={[{
					data: [
						{ value: currentPartyVotes, label: `curernt votes for ${data.selectedParty.name}` },
						{ value: data.state.add.amount, label: "added votes" },
						{ value: otherVotes, label: "votes for other parties"  }
					]
				}]}/>
			</div>
		</div>
	);
});


export default AddVoters;
