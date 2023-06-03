import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import {colors} from "../theme";
import {Typography} from "@mui/material";

export const FooterContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '0px 0px',
    background: colors.black,
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    [theme.breakpoints.up('md')]: {

    },
    color: colors.white
}));

export const FooterContent = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    maxWidth: 650,
    padding: '30px',
    [theme.breakpoints.down('md')]: {
        alignItems: 'center'
    },
}));

export const FooterTitle = styled(Typography)(({theme}) => ({
    lineHeight: 1.5,
    fontSize: '60px',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '32px',
    },
    fontFamily: 'Poppins',
}));

export const FooterDescription = styled(Typography)(({theme}) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: '1em',
    [theme.breakpoints.down('md')]: {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBottom: '1.5em'
    },
}));