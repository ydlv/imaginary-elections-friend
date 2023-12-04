import React from "react";
import { PieChart } from "@mui/x-charts";
import { PieChartProps } from "@mui/x-charts/PieChart/PieChart";
import { useSeries } from "./use-series";

export default function PopularVoteChart(props: Omit<PieChartProps, "series">) {
	return (
		<PieChart series={useSeries(x => x.votes)} {...props} />
	);
}