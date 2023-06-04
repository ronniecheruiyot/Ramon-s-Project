import styled from "@mui/material/styles/styled";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {colors} from "../theme";
import "@fontsource/poppins";
import List from "@mui/material/List";
import {breakpoints} from "@mui/system"; // Defaults to weight 400.

//Container
export const AppBarContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    // marginTop: 4,
    // margin: "5px 100px 0px 120px",
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px',
    [theme.breakpoints.down('md')]: {
        margin: "0px 0px 0px 0px",
        // position: 'absolute',
    },
    top: 0,
    position: 'fixed',
    backgroundColor: '#fff',
    width: '100%',
    overflow: 'hidden',
    zIndex: 1,
}));

export const AppBarHeader = styled(Typography)(({theme}) => ({
    padding: '4px',
    flexGrow: 1,
    fontSize: '3em',
    color: "#5072A7",
    fontFamily: 'Poppins',
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
        fontSize: '2em',
    },
    [theme.breakpoints.up("md")]: {
        marginLeft: '135px'
    },
    cursor: 'pointer',
}));

export const MyList = styled(List)(({type, theme}) => ({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up("md")]: {
        marginRight: '250px'
    },
}));

export const ListText = styled(Typography)(({theme, active}) => ({
    fontFamily: 'Poppins',
    color: "#5072A7",
    fontSize: 20,
    marginRight: '50px',
    cursor: 'pointer',
}));