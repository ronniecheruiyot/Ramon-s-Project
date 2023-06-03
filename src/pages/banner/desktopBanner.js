import React from "react";
import {
    BannerContainer,
    BannerContent,
    BannerDescription, BannerDescription1,
    BannerImage, BannerQuality,
    BannerTitle,
    PaperItem
} from "../../styles/banner";
import Box from "@mui/material/Box";
import img1 from "../../images/dpr.jpg"
import {useRef} from 'react';
import tractorImg from "../../images/tractor.jpg";
import img from "../../images/5.jpg";
import { Icon } from '@mui/material';
import {Star, StarOutline} from "@mui/icons-material";

export default function DesktopBanner(){
    return(
        <BannerContainer>
            <BannerContent>
                <PaperItem>
                <BannerTitle>
                    Ramon's Dorper Farm
                </BannerTitle>
                <BannerDescription>
                    Welcome to  Ramon's Dorper Farm.
                    We are committed to providing our customers with the best quality meat and breeding stock.
                    That's why we put a lot of effort into sourcing the best genetics for our flock.
                </BannerDescription>
                <BannerQuality >
                    <Icon><Star/></Icon>
                    <Icon><Star/></Icon>
                    <Icon><Star/></Icon>
                    <Icon><Star/></Icon>
                    <Icon><StarOutline/></Icon>
                </BannerQuality>
                <BannerDescription1>
                    Best Quality products
                </BannerDescription1>
                </PaperItem>
                <Box
                    component="img"
                    alt={"Main Pic"}
                    src={img}
                    sx={{
                        width: "100%",
                        height: "70%",
                        objectFit: "cover",
                        borderRadius: "40px 40px 40px 40px",
                        marginRight: '80px'
                    }}
                />
            </BannerContent>

        </BannerContainer>
    )
}