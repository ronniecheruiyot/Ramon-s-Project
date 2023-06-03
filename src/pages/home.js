import React from "react";
import AppBar from "./appBar/appBar";
import Banner from "./banner/banner";
import Content from "./content/content";
import Footer from "./footer/footer";
import SocialMedia from "./socialMediaActivity/socialMedia";
import {useRef} from 'react';
import NavBarMobile from "./appBar/navBarMobile";
import NavBarDesktop from "./appBar/navBarDesktop";
import useTheme from "@mui/material/styles/useTheme";
import {useMediaQuery} from "@mui/material";

export default function Home() {
    const ref = useRef(null);
    const ref1 = useRef(null);

    const handleHomeClicked = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    const handleContentClicked = () => {
        ref1.current?.scrollIntoView({behavior: 'smooth'});
    };

    const theme = useTheme();
    const viewPort = useMediaQuery(theme.breakpoints.down('md')); //if true, this is a mobile viewPort

    return(
        <div>
            {viewPort ?
                <NavBarMobile
                    handleHomeClicked={handleHomeClicked}
                    handleContentClicked={handleContentClicked}
                />
                :
                <NavBarDesktop
                    handleHomeClicked={handleHomeClicked}
                    handleContentClicked={handleContentClicked}
                />
            }
            <div ref={ref}>
                <Banner/>
            </div>
            <div ref={ref1}>
                <Content/>
            </div>
            <div>
                <SocialMedia/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}