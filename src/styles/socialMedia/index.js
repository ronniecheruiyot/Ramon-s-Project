import styled from "@mui/material/styles/styled";
import {Box, Typography} from "@mui/material";

export const Container = styled(Box)(({theme}) => ({
    backgroundColor: "#cdcdcd",
    // marginBottom: '60px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
}));

export const MediaContainer = styled(Box)(({theme}) => ({
    // marginTop: '20px',
    marginBottom: '90px',
    // display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 0px',
        [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
            alignItems: 'center',
            width: 'auto',
            height: 'auto',
    },
    [theme.breakpoints.up('lg')]: {
        marginLeft: "600px",
            marginRight: "450px",
        width: '40%',
        // height: 'auto',
    },
}));

export const MediaHeaderContainer = styled(Box)(({theme}) => ({
    marginTop: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    margin: 15,
    [theme.breakpoints.up('md')]: {
        marginTop: '70px',
        marginBottom: '40px',
    },
}));

export const MediaDetailContainer = styled(Box)(({theme}) => ({
    marginTop: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: 15,
    [theme.breakpoints.up('md')]: {
        marginBottom: '40px',
        width: '50%'
    },
}));

export const MediaHeader = styled(Typography)(({theme}) => ({
    // marginTop: '40px',
    // marginBottom: '20px',
    lineHeight: 1.5,
    fontSize: '40px',
    alignSelf: 'center',
    align: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
        fontSize: '20px',
        marginTop: '30px',
    },
    fontFamily: 'Poppins',
}));


export const MediaContent = styled(Typography)(({theme}) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    // marginBottom: '3em',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
        flexWrap: 'wrap',
            // flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBottom: '1.5em'
    },
    fontFamily: 'Poppins',
}));

export const DataContainer = styled(Box)(({theme}) => ({
    justifyContent: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    [theme.breakpoints.down('sm')]: {
        // flexDirection: 'column',
        display: 'flex',
    },
    [theme.breakpoints.up('md')]: {
        // flexDirection: 'row',
        display: 'flex',
    }

}));