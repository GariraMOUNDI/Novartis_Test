import {makeStyles} from "@material-ui/core";

const Layout = makeStyles(() => ({
    root : {
        borderRadius : "20px",
        backgroundColor : "#cfe8fc",
        paddingLeft : "20px",
        paddingRight : "20px",
        paddingTop : "10px",
        paddingBottom : "10px",
        marginTop : "10px"
    },
    label : {
        textAlign : "center",
        fontWeight: "bold",
        fontSize: "xx-large",
        fontFamily: "cursive"
    }

}));


const Select = makeStyles(() => ({
    root : {
        width : "80px",
        marginRight : "10px"
    },
    label : {
        fontWeight: "bold",
        fontFamily: "cursive",
        textAlign : "center",
        fontSize: "large",
        marginTop: "20px",
        marginBottom: "10px",
    }
}))

const Error = makeStyles(() => ({
    root : {
        borderRadius : "20px",
        backgroundColor : "#cfe8fc",
        paddingLeft : "20px",
        paddingRight : "20px",
        paddingTop : "10px",
        paddingBottom : "10px",
        marginTop : "10px"
    },
    label : {
        textAlign : "center",
        fontWeight : "bold",
        marginTop: "15px",
        marginBottom: "10px",
        marginLeft : "40px"
    }
}))

const List = makeStyles(() => ({
    root : {
        width : "60%"
    },
    label : {
        fontWeight: "bold",
        fontFamily: "cursive",
        textAlign : "center",
        fontSize: "large",
        marginTop: "20px",
        marginBottom: "10px",
    },
    table1 : {
        maxHeight : "720px",
        overflowX : "auto",
    },
    table2 : {
        overflowX : "auto",
    }
}))

export const MyCss = {
    layout : Layout,
    error : Error,
    select : Select,
    list : List
}