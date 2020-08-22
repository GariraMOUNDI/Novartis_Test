import {Container, InputLabel} from "@material-ui/core";
import {MyCss} from "../css";


export const MyErrorPage = () => {
    const styles = MyCss.error()
    return (
        <Container className={ styles.root }>
            <InputLabel className={ styles.label }>
            An error occured while fetching data. <br/> Please check your connection !!!
            </InputLabel>
        </Container>
    )
}