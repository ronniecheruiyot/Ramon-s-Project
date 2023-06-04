import React from "react";
import { Gallery } from "react-grid-gallery";
import {
    Container,
    DataContainer,
    MediaContainer,
    MediaContent, MediaDetailContainer,
    MediaHeader,
    MediaHeaderContainer
} from "../../styles/socialMedia";
import {ContentHeader, HeaderContainer} from "../../styles/content";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const images = [
    {
        src: "https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/345836970_613150270524262_6892692610986294057_n.jpg?stp=c20.0.206.206a_dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=da31f3&_nc_ohc=u7Pj5bEmIXsAX9ablkp&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfAtJdEThhNij7zbWANg8nE7ByogYnAgow7CtmiGWKLXNA&oe=647E6F09",
        width: "auto",
        height: "auto",
    },
    {
        src: "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/346272510_899947977769258_8964109956899801002_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7yzj7nBR9jgAX9Wzmol&_nc_oc=AQlQ5Gk1GO9KahwQxpItN_V1X-9JyUTQfAOPfjnnfoWcKzpNp_YI1hJfnHl97RxM-2s&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfBd2QMdifVHopiPIrx06r2bdE0hG5lQGEucQQr_e7rx8Q&oe=647D590E",
        width: "auto",
        height: "auto",
    },
    {
        src: "https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/335620767_708651594277803_9012302305460680075_n.jpg?stp=c0.56.206.206a_dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_ohc=THc9qnRhiTMAX_m0KuT&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfC87_A5_l8tZNPeRab_T6R4UW7vhj4VJmYMsk4BK9ecRQ&oe=647D86B2",
        width: "auto",
        height: "auto",
    },

    {
        src: "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/341775533_223318310307422_4186418943122886023_n.jpg?stp=c20.0.206.206a_dst-jpg_p206x206&_nc_cat=102&ccb=1-7&_nc_sid=da31f3&_nc_ohc=v_dmf-ozR3kAX_rFexq&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfCz_jzACsD4KeVXk50xHHQ_KZwdBPkctFN-vMXX2EnOgQ&oe=647E962D",
        width: "auto",
        height: "auto",
    },
    {
        src: "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/340534534_170511222589878_2960162592365733688_n.jpg?stp=c20.0.206.206a_dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_ohc=BTtaITUsGl8AX8Eomca&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfDvv8YtJb0QbRn3r3PdASp0EU3OxbWe_9ZlLKp2iCE6cw&oe=647E5362",
        width: "auto",
        height: "auto",
        // isSelected: true,
    },
    {
        src: "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/331956909_1202100243760146_7668181101551414730_n.jpg?stp=c94.0.206.206a_dst-jpg_p206x206&_nc_cat=109&ccb=1-7&_nc_sid=da31f3&_nc_ohc=ADYBM_8ImmIAX-G8uL-&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfBnrLaB9NgiHAi4cmSCiFQm3jT3MznVMJPo4OxOYFJAkA&oe=647E0A1C",
        width: "auto",
        height: "auto",
    },

    {
        src: "https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/344053267_3469394113316894_7929669103404442772_n.jpg?stp=c20.0.206.206a_dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_ohc=c22U_W0xt6kAX91c3QX&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfAWQqeumj_xZjxeakJzJs7BopuZLSS2Br16oCU598_hhg&oe=647ED266",
        width: "auto",
        height: "auto",
    },
    {
        src: "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/343196186_1562483530907673_5710707571998564187_n.jpg?stp=c20.0.206.206a_dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_ohc=IxuUFOoth-UAX8zlRUp&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfByffElU_fuDNIq-lCZNC3wjG9k37IY-SzwTBupCjULyA&oe=647EAA35",
        width: "auto",
        height: "auto",
        // isSelected: true,
    },

];

export default function SocialMediaDesktop() {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

    return(
        <>
            <Container>
            <MediaHeaderContainer>
                <MediaHeader> Social Media</MediaHeader>
            </MediaHeaderContainer>
            <MediaDetailContainer>
                <MediaContent>
                    These are some of the activities in our Londiani farm.
                    Keep up with our farm activities through our social media platforms.
                </MediaContent>
            </MediaDetailContainer>
            <DataContainer>
                <MediaContainer>
                    {/*<Gallery images={images}*/}
                    {/*         margin={5}*/}
                    {/*         onClick={() => {*/}
                    {/*             openInNewTab("https://www.facebook.com/DorperHerdByRamon/photos");*/}
                    {/*         }}*/}
                    {/*/>*/}
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {images && images.length > 0 && images.map((item, i) => {
                            return(
                            <ImageListItem key={i}
                                           sx={{cursor: 'pointer'}}
                                           onClick={() => {
                                               openInNewTab("https://www.facebook.com/DorperHerdByRamon/photos");
                                           }}>
                                <img
                                    src={item.src}
                                    // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={'IMG'}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            );
                        })}
                    </ImageList>
                </MediaContainer>
            </DataContainer>
            </Container>
        </>
    );
}