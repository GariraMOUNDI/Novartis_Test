import {Domain} from "../../pages/api/domain/domain";
import {
    Container,
    InputLabel,
    Paper, Table,
    TableBody,
    TableCell, TableContainer, TableHead, TableRow
} from "@material-ui/core";
import React from "react";
import {MyCss} from "../css";

interface MyDrugListProps {
    title : string,
    genderTable? : boolean
    headers : string[]
    data : Domain[]
}
export const MyList = ({ headers, title, data,genderTable = false} : MyDrugListProps) => {
    const styles = MyCss.list
    return (
        <Container style = { styles.root }>
            <InputLabel style = { styles.label } >
                { title }
            </InputLabel>
            <TableContainer style={ genderTable ? styles.table2 : styles.table1 } component={Paper}>
                <Table aria-label="simple table">
                    <TableHead >
                        <TableRow>
                            {
                                headers.map(head => {
                                    let align : string
                                    head === headers[0] ? align = "left" : align = "right"
                                    return (<TableCell key={head} align={align}  style={{ fontWeight : "bold"}}>{head}</TableCell>)
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data?.map ( indication => (
                                <TableRow key= {indication.name}>
                                    <TableCell component="th" scope="row">
                                       {indication.name}
                                    </TableCell>
                                    <TableCell align="right">{indication.count}</TableCell>
                                    <TableCell align="right">{indication.percentage}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}