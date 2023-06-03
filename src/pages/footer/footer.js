import useTheme from "@mui/material/styles/useTheme";
import {useMediaQuery} from "@mui/material";
import MobileFooter from "./mobileFooter";
import DesktopFooter from "./desktopFooter";
import React from "react";

export default function Footer() {
    const theme = useTheme();
    const viewPort = useMediaQuery(theme.breakpoints.down('md')); //if true, this is a mobile viewPort

    return(
        viewPort ? <MobileFooter/> : <DesktopFooter/>
    )
}