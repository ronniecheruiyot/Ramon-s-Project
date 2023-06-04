import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import {colors} from "../theme";
import {Typography} from "@mui/material";
import img1 from "../../images/5.jpg"
import Paper from "@mui/material/Paper";

export const BannerContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    // justifyContent: 'center',
    width: '100%',
    height: '950px',
    padding: '0px 0px',
    // background: colors.lightgray,
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column  ',
        alignItems: 'center',
        height: '100%',
    },
    // backgroundImage: `url(${img1})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: `100% 120%`,
    // backgroundColor: "#0000CD",
    background: `linear-gradient(#0000CD, #293f50)`
}));

export const BannerContent = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    // maxWidth: 1000,
    padding: '30px',
    [theme.breakpoints.down('md')]: {
        alignItems: 'center',
        flexDirection: "column",
    },
    // backgroundColor: 'gray',
    // opacity: 0.5,
}));

export const PaperItem = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    // maxWidth: 1000,
    borderRadius: 20,
    padding: '50px',
    [theme.breakpoints.down('md')]: {
        alignItems: 'center'
    },
    // backgroundColor: 'gray',
    // opacity: 0.5,
}));

export const BannerTitle = styled(Typography)(({theme}) => ({
    lineHeight: 1.5,
    // fontSize: '70px',
    marginBottom: '20px',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
        fontSize: '32px',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '60px',
        width: '80%',
        marginLeft: '70px'
    },
    color: '#fff',
    fontFamily: 'Poppins',
}));

export const BannerDescription = styled(Typography)(({theme}) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBottom: '1.5em'
    },
    color: "#fff",
    [theme.breakpoints.up('md')]: {
        fontSize: '20px',
        width: '70%',
        marginLeft: '70px'
    },
    fontWeight: 100,
    fontFamily: 'Poppins',

}));

export const BannerDescription1 = styled(Typography)(({theme}) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBottom: '1.5em'
    },
    color: "#74e4a4",
    [theme.breakpoints.up('md')]: {
        fontSize: '20px',
        width: '70%',
        marginLeft: '70px'
    },
    fontWeight: 100,
    fontFamily: 'Poppins',

}));

export const BannerImage = styled('img')(({src, theme}) => ({
    src: `url(${src})`,
    width: '50%',
    [theme.breakpoints.down('md')]: {
        width: '350px'
    },
    [theme.breakpoints.down('sm')]: {
        width: '320px',
        height: '300px'
    }
}));

export const BannerQuality = styled(Box)(({theme}) => ({
    display: 'flex',
    color: "gold",
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'row',
    },
    [theme.breakpoints.up('md')]: {
        marginLeft: '70px',
    },
    cursor: 'pointer'
}));