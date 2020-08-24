import React, {useState} from "react";
import {MyList, MyLayout, MySelectBox, MyChart, MyErrorPage } from "../components";
import {GlobalState, GlobalStateProps} from "./api";
import {Container} from "@material-ui/core";
import {StatisticsData} from "./api/query/StatisticsData";
import {ChartData} from "./api/query/ChartData";

const IndexPage = ({startYear , endYear  , error , chartData, drugDivision,sexDivision} : GlobalStateProps) => {
    const getItems = () => {
        let year = (new Date().getFullYear()) - 1
        const items = []
        for ( let i=10; i>=0 ; i--){
            items.push(`${year - i}`)
        }
        return items
    }

    const [ state, setState ] = useState<GlobalStateProps>({
        startYear : startYear,
        endYear : endYear,
        error : error,
        chartData : chartData,
        drugDivision : drugDivision,
        sexDivision : sexDivision
    })

    const onYearChange = (selected : string, start : boolean) => {
        if(start){
            setState(prev => ({
                ...prev,
                startYear : selected
            }))
        }else{
            setState(prev => ({
                ...prev,
                endYear : selected
            }))
        }

        if(+state.startYear > +state.endYear){
            setState(prev => ({
                ...prev,
                error : true
            }))
        }else{
            setState(prev => ({
                ...prev,
                error : false
            }))
            getData().then(res => res)
        }
    }

    const getData = async () => {
        const startDate = `${state.startYear}-01-01`
        const endDate = `${state.endYear}-12-31`
        const statistics = await StatisticsData(startDate, endDate)
        const chartData = await ChartData(startDate, endDate)
        setState(prev => ({
            ...prev,
            chartData: chartData,
            drugDivision: statistics.drugDivision,
            sexDivision: statistics.sexDivision
        }))
    }

    return (
        state.sexDivision ? (
            <MyLayout title={"Drug Adverse Events"}>
                <hr/>
                <Container style = {{ display : "flex" }}>
                    <MyList headers={["Indications", "Count", "Percentage(%)"]} title={"Drug indications"} data={state.drugDivision} />
                    <Container>
                        <MySelectBox items={getItems()} startYear={state.startYear} endYear={state.endYear} error={state.error} onChange={onYearChange}/>
                        <MyChart data={state.chartData}/>
                        <MyList headers={["Gender", "Count", "Percentage(%)"]} title={"Gender percentage"} data={state.sexDivision} genderTable={true}/>
                    </Container>
                </Container>
            </MyLayout>
        ) : (
            <MyErrorPage/>
        )
    )
}

IndexPage.getInitialProps = () => GlobalState()

export default IndexPage
