
const getTotalRecords = async (startDate : string, endDate: string) => {
    try{
        const res = await fetch(`https://api.fda.gov/drug/event.json?search=receivedate:[${startDate}+TO+${endDate}]&limit=1`)
            .catch(error => console.log(error))
        if (res && "json" in res) {
            const json = await res.json()
            return json.meta.results.total
        }
    }catch (error) {
        console.log("An error occured while fetching data")
        return null
    }
}



const getSexDivision = async (startDate : string, endDate: string) => {
    try{
        const res = await fetch(`https://api.fda.gov/drug/event.json?search=receivedate:[${startDate}+TO+${endDate}]&count=patient.patientsex`)
            .catch(error => console.log(error))
        if (res && "json" in res) {
            const json = await res.json()
            return json.results.map((res: { term: number; count: string }) => ({
                term : convertSex(res.term),
                count : res.count
            }))
        }
    }catch (error) {
        console.log("An error occured while fetching data")
        return null
    }
}

const convertSex = (sex : number) : string => {
    switch (sex) {
        case 1 : return "Male"
        case 2 : return "Female"
        default : return "Unknown"
    }
}
const getDrugIndication = async (startDate : string, endDate: string) => {
    try{
        const res = await fetch(`https://api.fda.gov/drug/event.json?search=receivedate:[${startDate}+TO+${endDate}]&count=patient.drug.drugindication`)
            .catch(error => console.log(error))
        if (res && "json" in res) {
            const json = await res.json()
            return json.results
        }
    }catch (error) {
        console.log("An error occured while fetching data")
        return null
    }
}

export const Data = (startDate : string, endDate : string) => ({
    getTotalRecords : getTotalRecords(startDate, endDate),
    getSexDivision : getSexDivision(startDate, endDate),
    getDrugIndication : getDrugIndication(startDate, endDate)
})