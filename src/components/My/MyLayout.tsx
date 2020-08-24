import React, {ReactNode} from "react";
import {Container, InputLabel} from "@material-ui/core";
import {MyCss} from "../css";

interface MyLayoutProps {
    children? : ReactNode,
    title : string
}

export const MyLayout = ({ children, title } : MyLayoutProps ) => {
    const styles = MyCss.layout()
    return (
        <Container className={ styles.root }>
            <Container>
                <InputLabel className={ styles.label }>
                    {title}
                </InputLabel>
            </Container>
            { children }
        </Container>
    )
}