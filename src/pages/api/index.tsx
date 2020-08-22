import {Result, Statistic} from "./domain/domain";
import {StatisticsData} from "./query/StatisticsData";
import {ChartData} from "./query/ChartData";

export interface GlobalStateProps {
    chartData : Result[]
    statistics : Statistic
}

export const GlobalState = async (startYear: string, endYear: string): Promise<GlobalStateProps> => ({
    chartData : await ChartData(startYear, endYear),
    statistics: await StatisticsData(`${startYear}-01-01`, `${endYear}-12-31`)
})