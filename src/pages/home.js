import React from "react";
import AppBar from "./appBar/appBar";
import Banner from "./banner/banner";
import Content from "./content/content";
import {ContentHeader} from "../styles/content";
import Footer from "./footer/footer";
import SocialMediaDesktop from "./socialMediaActivity/socialMediaDesktop";
import SocialMedia from "./socialMediaActivity/socialMedia";

export default function Home() {
    return(
        <div>
            <AppBar/>
            <Banner/>
            <Content/>
            <SocialMedia/>
            <Footer/>
        </div>
    )
}