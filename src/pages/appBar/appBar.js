import useTheme from "@mui/material/styles/useTheme";
import {useMediaQuery} from "@mui/material";
import NavBarMobile from "./navBarMobile";
import NavBarDesktop from "./navBarDesktop";
import React from "react";

export default function AppBar(){
    const theme = useTheme();
    const viewPort = useMediaQuery(theme.breakpoints.down('md')); //if true, this is a mobile viewPort

    return(
        viewPort ? <NavBarMobile/> : <NavBarDesktop/>

    );
}