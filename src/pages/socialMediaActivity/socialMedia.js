import useTheme from "@mui/material/styles/useTheme";
import {useMediaQuery} from "@mui/material";
import SocialMediaMobile from "./socialMediaMobile";
import SocialMediaDesktop from "./socialMediaDesktop";
import React from "react";

export default function SocialMedia() {
    const theme = useTheme();
    const viewPort = useMediaQuery(theme.breakpoints.down('md')) //if true, this is a mobile viewPort

    return(
      viewPort ? <SocialMediaMobile/> : <SocialMediaDesktop/>
    );
}