import React from "react";
import { ExternalLink } from "../utils/ExternalLink";

export default function HighLowExplanation() {
	return (
		<>
			<p>
            This app uses npm package&nbsp;
				<ExternalLink to="https://www.npmjs.com/package/apportionment">apportionment</ExternalLink>
				&nbsp;by&nbsp; 
				<ExternalLink to="https://www.npmjs.com/~elgoorf">ELGoorf</ExternalLink>
				&nbsp;to calculate apportioment. 
			</p>
			<p>
                According to the &nbsp;
				<ExternalLink to="https://www.npmjs.com/package/apportionment#largest-average-aka-divisor-methods" 
				>documnetation</ExternalLink>,&nbsp;
                if you choose one of the methods that are of the {"\"divisor method\""} category,&nbsp;
				<i>sometimes</i> the result may not be exact, in which case, the package will give&nbsp;
                us two approximations - one with a higher number of seats than you have asked for, and one with a lower.
				&nbsp;{"We'll also let you know, of course."}
			</p>
		</>
	);
}