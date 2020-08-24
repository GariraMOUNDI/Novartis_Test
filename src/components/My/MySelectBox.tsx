import {Container, InputLabel} from "@material-ui/core";
import {MySelect} from "../index";
import React from "react";
import {MyCss} from "../css";

interface MySelectBoxProps {
    items : string[],
    error : boolean,
    startYear : string,
    endYear : string,
    onChange : (selected : string , start : boolean ) => void
}

export const MySelectBox = ({ items, error, startYear, endYear, onChange} : MySelectBoxProps) => {
    const styles = MyCss.select()
    const errorStyle = MyCss.error().label

    return (
        <Container style = {{ display : "flex", marginBottom : "10px"}}>
            <InputLabel className={styles.label} style={{marginRight: "10px"}} >
                Fetch data from
            </InputLabel>
            <MySelect id={"start"} value={startYear} placeholder={"year"} items={items} onHandleChange={ selected => { onChange(selected, true)} }/>
            <InputLabel className={styles.label} style={{ width: "80px"} } >
                to
            </InputLabel>
            <MySelect id={"end"} value={endYear} placeholder={"year"} items={items} onHandleChange={selected => { onChange(selected, false)}}/>
            {
                error ? <InputLabel className={ errorStyle } style={{ width : "200px"}} error={ true }>The start year must not be later than the end year</InputLabel> : <div />
            }
        </Container>
    )
}