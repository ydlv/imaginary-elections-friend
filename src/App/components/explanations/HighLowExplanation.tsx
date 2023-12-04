import React from "react";
import { ExternalLink } from "../utils/ExternalLink";

export default function HighLowExplanation() {
	return (
		<div>
			<p>
            This app uses npm package
				<ExternalLink to="https://www.npmjs.com/package/apportionment">apportionment</ExternalLink>
            by 
				<ExternalLink to="https://www.npmjs.com/~elgoorf">ELGoorf</ExternalLink>
            to calculate apportioment. 
			</p>
			<p>
                According to the 
				<ExternalLink to="https://www.npmjs.com/package/apportionment#largest-average-aka-divisor-methods" 
				>documnetation</ExternalLink>,
                if you choose one of the methods that are of the {"\"divisor method\""} category,
				<i>sometimes</i> the result may not be exact, in which case, the package will give
                us two approximations - one with a higher number of seats than you have asked for, and one with a lower.
			</p>
		</div>
	);
}