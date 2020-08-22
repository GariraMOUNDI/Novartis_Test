import React, {ReactNode} from "react";
import {Container, InputLabel} from "@material-ui/core";
import {MyCss} from "../css";

interface MyLayoutProps {
    children? : ReactNode,
    title : string
}

export const MyLayout = ({ children, title } : MyLayoutProps ) => {
    const styles = MyCss.layout
    return (
        <Container style={ styles.root }>
            <Container>
                <InputLabel style = { styles.label } >
                    {title}
                </InputLabel>
            </Container>
            { children }
        </Container>
    )
}