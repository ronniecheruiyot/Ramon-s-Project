import useTheme from "@mui/material/styles/useTheme";
import {useMediaQuery} from "@mui/material";
import MobileBanner from "./mobileBanner";
import DesktopBanner from "./desktopBanner";
import React from "react";

export default function Banner(){
    const theme = useTheme();
    const viewPort = useMediaQuery(theme.breakpoints.down('md')); //if true, this is a mobile viewPort

    return(
        viewPort ? <MobileBanner/> : <DesktopBanner/>
    );
}