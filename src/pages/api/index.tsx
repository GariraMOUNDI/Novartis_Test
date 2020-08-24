import {Domain, Result} from "./domain/domain";
import {StatisticsData} from "./query/StatisticsData";
import {ChartData} from "./query/ChartData";

export interface GlobalStateProps {
    startYear : string
    endYear: string
    error : boolean
    chartData : Result[]
    drugDivision : Domain[],
    sexDivision : Domain[]
}

export const GlobalState = async (): Promise<GlobalStateProps> => {
    const today = new Date();
    const year = today.getFullYear() - 1;
    const startDate = `${year}-01-01`
    const endDate = `${year}-12-31`
    const statistics = await StatisticsData(startDate, endDate)
    console.log(statistics)
    return {
        startYear: `${year}`,
        endYear: `${year}`,
        error: false,
        chartData: await ChartData(startDate, endDate),
        drugDivision: statistics.drugDivision,
        sexDivision: statistics.sexDivision
    }
}