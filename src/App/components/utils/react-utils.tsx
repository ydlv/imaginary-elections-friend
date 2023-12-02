import React from "react";

export const WhiteSpace: React.FC = () => {
	return <>{" "}</>;
};

type PercentsProps = {number: number, fractionDigits?: number};

export function Percents({number, fractionDigits}: PercentsProps) {
	return <>{(number * 100).toFixed(fractionDigits)}%</>;
}