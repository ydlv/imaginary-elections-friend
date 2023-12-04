import React from "react";

export default function HighLowExplanation() {
	return (
		<div>
			<p>
            This app uses npm package
				<a href="https://www.npmjs.com/package/apportionment" target="blank">apportionment</a>
            by 
				<a href="https://www.npmjs.com/~elgoorf" target="blank">ELGoorf</a>
            to calculate apportioment. 
			</p>
			<p>
                According to the 
				<a href="https://www.npmjs.com/package/apportionment#largest-average-aka-divisor-methods" 
					target="blank">documnetation</a>,
                if you choose one of the methods that are of the {"\"divisor method\""} category,
				<i>sometimes</i> the result may not be exact, in which case, the package will give
                us two approximations - one with a higher number of seats than you have asked for, and one with a lower.
			</p>
		</div>
	);
}