import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import React from "react";
import {MyCss} from "../css";

interface MySelectProps {
    id : string,
    value : string
    placeholder : string
    items : string[]
    onHandleChange : (selected : string) => void
}

export const MySelect = ( { id, value,placeholder, items, onHandleChange } : MySelectProps) => {
    const styles = MyCss.select
    return (
        <FormControl className = { styles.root }>
            <InputLabel id={id}>{placeholder}</InputLabel>
            <Select
                labelId={id}
                id={id}
                value={value}
                onChange={(event) => {
                    onHandleChange(event.target.value as string)
                }}
            >
                {
                    items.map(
                        it => <MenuItem key={it} value={it}>{it}</MenuItem>
                    )
                }
            </Select>
        </FormControl>
    )
}