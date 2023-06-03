import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import Paper from "@mui/material/Paper";

export const ContentContainer = styled(Box)(({theme}) => ({
    // marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    padding: '0px 0px',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    [theme.breakpoints.up('md')]: {
        marginLeft: "80px",
        marginRight: "80px",
        width: 'auto',
        height: 'auto',
    },
}));

export const HeaderContainer = styled(Box)(({theme}) => ({
    marginTop: '20px',
    justifyContent: 'center',
    display: 'flex',
    [theme.breakpoints.up('md')]: {
        marginTop: '70px'
    },
}));

export const ContentBox = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: "column",
    // justifyContent: 'center',
    padding: '10px',
    // elevation: 10,
    // borderRadius: 20,
    [theme.breakpoints.down('sm')]: {
        alignItems: 'center'
    },
    margin: 10,
    // height: 'auto',
    // width: 'auto',
    [theme.breakpoints.up('lg')]: {
        marginTop: 50,
        // height: '70%',
        // width: '70%',
    },
}));

export const ContentTitle = styled(Typography)(({theme}) => ({
    lineHeight: 1.5,
    fontSize: '23px',
    marginTop: '20px',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '20px',
    },
    fontFamily: 'Poppins',
    color: "#5D76A9"
}));

export const ContentHeader = styled(Typography)(({theme}) => ({
    lineHeight: 1.5,
    fontSize: '40px',
    alignSelf: 'center',
    align: 'center',
    justifyContent: 'center',
    // fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
        fontSize: '20px',
        marginTop: '30px',
    },
    fontFamily: 'Poppins',
}));

export const ContentDescription = styled(Typography)(({theme}) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBottom: '1.5em'
    },
    fontFamily: 'Poppins',
}));

export const ContentImage = styled('img')(({src, theme}) => ({
    src: `url(${src})`,
    width: '100%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    }
}));