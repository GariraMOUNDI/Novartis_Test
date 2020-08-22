import React from "react";
import {Result} from "../../pages/api/domain/domain";
import {Paper} from "@material-ui/core";
import {AreaSeries, ArgumentAxis, Chart, ValueAxis} from "@devexpress/dx-react-chart-material-ui";

interface MyChartProps {
    data : Result[]
}

export const MyChart = ({data} : MyChartProps) => (
        <Paper>
            <Chart data={data}>
                <ArgumentAxis />
                <ValueAxis />
                <AreaSeries
                    valueField="count"
                    argumentField="term"
                    name={"MyChart"}
                />
            </Chart>
        </Paper>
)
