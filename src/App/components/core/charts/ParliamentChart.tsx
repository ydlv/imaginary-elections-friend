import React from "react";
import { PieChart } from "@mui/x-charts";
import { PieChartProps } from "@mui/x-charts/PieChart/PieChart";
import { useSeries } from "./use-series";

export default function ParliamentChart(props: Omit<PieChartProps, "series">) {
	return (
		<PieChart series={useSeries(x => x.seats, {
			startAngle: -95,
			endAngle: 95,
			innerRadius: 50
		})} {...props} />
	);
}