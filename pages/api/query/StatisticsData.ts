import {Data} from "./Data";
import {Domain, Result, Statistic} from "../domain/domain";

export const StatisticsData = async (startDate: string, endDate: string) : Promise<Statistic> => {
    const data = Data(startDate, endDate)
    const sex = await data.getSexDivision
    const drug = await data.getDrugIndication

    const getPercentage = (list: Result[]): Domain[] => {
        let totalForPercent = 0
        list?.forEach( res => {
            totalForPercent += +res.count
        })

        return list?.map(res => ({
            name: res.term,
            count : res.count,
            percentage: `${((+res.count / totalForPercent) * 100).toFixed(2)}`
        }))
    }

    return {
        sexDivision : getPercentage(sex),
        drugDivision : getPercentage(drug)
    }
}