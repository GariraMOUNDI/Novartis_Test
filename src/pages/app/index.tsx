

import React, {useState} from "react";
import {MyList, MyLayout, MySelectBox, MyChart, MyErrorPage } from "../../components";
import {GlobalState, GlobalStateProps} from "../api";
import {Container} from "@material-ui/core";

const IndexPage = (props : GlobalStateProps) => {
    const getItems = () => {
        let year = (new Date().getFullYear()) - 1
        var items = []
        for ( let i=10; i>=0 ; i--){
            items.push(`${year - i}`)
        }
        return items
    }
    const [ state, setState] = useState(props)
    const onChangeDate = async (startDate: string, endDate: string) => {
        console.log(startDate, endDate)
        setState(await GlobalState(startDate, endDate))
    }
    return (
        state.statistics.sexDivision ? (
            <MyLayout title={"Drug Adverse Events"}>
                <hr/>
                <Container style = {{ display : "flex" }}>
                    <MyList headers={["Indications", "Count", "Percentage(%)"]} title={"Drug indications"} data={state.statistics.drugDivision} />
                    <Container>
                        <MySelectBox items={getItems()} onYearChange={onChangeDate}/>
                        <MyChart data={state.chartData}/>
                        <MyList headers={["Gender", "Count", "Percentage(%)"]} title={"Gender percentage"} data={state.statistics.sexDivision} genderTable={true}/>
                    </Container>
                </Container>
            </MyLayout>
        ) : (
            <MyErrorPage/>
        )
    )
}

IndexPage.getInitialProps = () => GlobalState("2002", "2002")

export default IndexPage
