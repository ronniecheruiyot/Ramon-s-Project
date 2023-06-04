import React from "react";
import {
    ContentContainer,
    ContentDescription,
    ContentHeader,
    ContentBox,
    ContentTitle, HeaderContainer
} from "../../styles/content";
import Box from "@mui/material/Box";
import tractorImg from "../../images/tractor.jpg"
import feeding from "../../images/feeding.jpg"
import vaccination from "../../images/vaccination.jpg"

export default function ContentDesktop() {
    return(
    <>
        <HeaderContainer>
            <ContentHeader> Services And Activities</ContentHeader>
        </HeaderContainer>
        <ContentContainer>
            <ContentBox>
                {/*<ContentImage src={'https://miro.medium.com/v2/resize:fit:640/format:webp/1*0fbjeuMrvKpCumBE1_Y6SA.jpeg'}/>*/}
                {/*TODO: try this approach*/}
                <Box
                    component="img"
                    alt={"Main Pic"}
                    src={tractorImg}
                    sx={{
                        width: "100%",
                        height: "40%",
                        objectFit: "cover",
                        borderRadius: "10px 10px 10px 10px",
                    }}
                />
                <ContentTitle>Farm</ContentTitle>
                <ContentDescription>
                    Utilising the rainy season, we till our land in preparation for planting Super Napier( Packchong 1),
                    Boma Rhodes, and Alfa Alfa.
                    Growing your own feed not only saves you money but also ensures that your animals are getting the best quality feed possible.
                    If you have some land, do not rely on buying feeds alone, take control of your farm and start planting today.
                    But if you don't, leasing is the best option!
                </ContentDescription>
            </ContentBox>
            <ContentBox>
                <Box
                    component="img"
                    alt={"Main Pic"}
                    src={feeding}
                    sx={{
                        width: "100%",
                        height: "40%",
                        objectFit: "cover",
                        borderRadius: "10px 10px 10px 10px",
                    }}
                />
                <ContentTitle> Feeds</ContentTitle>
                <ContentDescription>
                    Our sheep are provided good quality forage.
                    Good quality forage, such as grass or hay, should be provided in adequate amounts for sheep to meet their nutritional needs.
                    In addition to forage, sheep require other essential nutrients such as proteins, carbohydrates, minerals, and vitamins.
                    Offering a balanced diet that meets all these requirements is essential for the health and productivity of your sheep.
                </ContentDescription>
            </ContentBox>
            <ContentBox>
                <Box
                    component="img"
                    alt={"Main Pic"}
                    src={vaccination}
                    sx={{
                        width: "100%",
                        height: "40%",
                        objectFit: "cover",
                        borderRadius: "10px 10px 10px 10px",
                    }}
                />
                <ContentTitle> Vaccination </ContentTitle>
                <ContentDescription>
                    Our Dorper sheep are vaccinated against some of the most dangerous Clostridial Diseases, including tetanus, enterotoxaemia or pulpy kidney, and blackleg.
                    Vaccination is an important measure to keep our sheep healthy and disease-free.
                    Clostridial Diseases can cause significant harm to our sheep, and we don't want to take any chances with their health.
                </ContentDescription>
            </ContentBox>
        </ContentContainer>
    </>
    );
}