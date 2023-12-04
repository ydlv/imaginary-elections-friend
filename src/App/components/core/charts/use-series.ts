import { PartyOutputModel } from "../../store/model/election-model";
import { useStoreState } from "../../store/store";
import { PieChartProps } from "@mui/x-charts/PieChart/PieChart";

type SeriesType = PieChartProps["series"];
type SeriesProps = SeriesType[0];

export function useSeries(data: (party: PartyOutputModel) => number, seriesProps?: Omit<SeriesProps, "data">): SeriesType {
	const results = useStoreState(state => state.electionOutput);
	return [
		{
			data: results.parties.map(x => ({
				value: data(x),
				color: x.color,
				id: x.id,
				label: x.name
			})),
			...(seriesProps || {})
		}
	];
}