import {Container, InputLabel} from "@material-ui/core";
import {MySelect} from "../index";
import React, {useState} from "react";
import {MyCss} from "../css";

interface MySelectBoxProps {
    items : string[],
    onYearChange : (startYear : string, endYear: string) => void
}

interface BoxState {
    error : boolean
    startYear : string
    endYear : string
}

export const MySelectBox = ({ items, onYearChange} : MySelectBoxProps) => {
    const styles = MyCss.select()
    const [boxState, setBoxState] = useState<BoxState>({
        error : false,
        startYear : items[items.length-1],
        endYear : items[items.length-1]
    })

    const modifyState = (selected : string , start : boolean) => {
        setBoxState(prev => {
            if (start) {
                return {
                    ...prev,
                    startYear : selected
                }
            }else{
                return {
                    ...prev,
                    endYear : selected
                }
            }
        })
    }

    const onChange = ( selected : string , start : boolean ) => {
        modifyState(selected, start)
        if (boxState.startYear > boxState.endYear){
            setBoxState(prev => ({
                ...prev,
                error : true
            }))
        }else{
            setBoxState(prev => ({
                ...prev,
                error : false
            }))
            onYearChange(boxState.startYear, boxState.endYear)
        }
    }
    return (
        <Container style = {{ display : "flex", marginBottom : "10px"}}>
            <InputLabel>Error year</InputLabel>
            <InputLabel className={styles.label} style={{marginRight: "10px"}} >
                Fetch data from
            </InputLabel>
            <MySelect id={"start"} value={boxState.startYear} placeholder={"year"} items={items} onHandleChange={ selected => { onChange(selected, true)} }/>
            <InputLabel className={styles.label} style={{ width: "80px"} } >
                to
            </InputLabel>
            <MySelect id={"end"} value={boxState.endYear} placeholder={"year"} items={items} onHandleChange={selected => { onChange(selected, false)}}/>
        </Container>
    )
}