
import {Data} from "./Data";
import {Result} from "../domain/domain";

export const ChartData = async (startYear: string, endYear: string): Promise<Result[]> => {

    const getData = async (startDate: string, endDate: string) => {
        return await Data(startDate, endDate).getTotalRecords.then(res => res)
    }

    const getMonth = (month: number): string => {
        switch (month) {
            case 1:
                return "January"
            case 2:
                return "February"
            case 3:
                return "March"
            case 4:
                return "April"
            case 5:
                return "May"
            case 6:
                return "June"
            case 7:
                return "July"
            case 8:
                return "August"
            case 9:
                return "September"
            case 10:
                return "October"
            case 11:
                return "November"
            case 12:
                return "December"
            default :
                return "N/A"
        }
    }

    if (+endYear - +startYear === 0) {
        const result = []
        for (let i = 1; i <= 12; i++) {
            if (i === 12) {
                result.push({
                    term: getMonth(i),
                    count: await getData(`${endYear}-${i}-01`, `${+endYear}-12-31`) + ""
                })
            } else {
                result.push({
                    term: getMonth(i),
                    count: await getData(`${endYear}-${i}-01`, `${endYear}-${i + 1}-01`) + ""
                })
            }
        }
        return result
    } else {
        const result = []
        for (let i = +startYear; i <= +endYear; i++) {
            result.push({
                term: `${i}`,
                count: await getData(`${i}-01-01`, `${i}-12-31`) + ""
            })
        }
        return result
    }
}