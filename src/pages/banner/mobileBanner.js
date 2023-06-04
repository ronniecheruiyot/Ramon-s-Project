import React from "react";
import {
    BannerContainer,
    BannerContent,
    BannerDescription, BannerDescription1,
    BannerQuality,
    BannerTitle,
} from "../../styles/banner";
import {useRef} from 'react';
import {Icon} from "@mui/material";
import {Star, StarOutline} from "@mui/icons-material";

export default function MobileBanner(){
    const ref = useRef(null);

    return(
        <BannerContainer ref={ref}>
            <BannerContent>
                {/*<PaperItem>*/}
                    <BannerTitle>
                        Ramon's Dorper Farm
                    </BannerTitle>
                    <BannerDescription>
                        Welcome to  Ramon's Dorper Farm.
                        We are committed to providing our customers with the best quality meat and breeding stock.
                        That's why we put a lot of effort into sourcing the best genetics for our flock.
                    </BannerDescription>
                <BannerQuality>
                    <Icon><Star/></Icon>
                    <Icon><Star/></Icon>
                    <Icon><Star/></Icon>
                    <Icon><Star/></Icon>
                    <Icon><StarOutline/></Icon>
                </BannerQuality>
                <BannerDescription1>
                    Best Quality products
                </BannerDescription1>
                {/*</PaperItem>*/}
            </BannerContent>
        </BannerContainer>
    )
}