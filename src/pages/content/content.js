import useTheme from "@mui/material/styles/useTheme";
import {useMediaQuery} from "@mui/material";
import ContentMobile from "./contentMobile";
import ContentDesktop from "./contentDesktop";
import React from "react";

export default function Content() {
    const theme = useTheme();
    const viewPort = useMediaQuery(theme.breakpoints.down('md')); //if true, this is a mobile viewPort
    return(
        viewPort ? <ContentMobile/>: <ContentDesktop/>
    );
}