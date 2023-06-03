import React from "react";
import {AppBarContainer, AppBarHeader, ListText, MyList} from "../../styles/appBar";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import {useRef} from 'react';

const NavBarDesktop = () => {
    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        /**
         * Container,
         * AppBarHeader,
         * List
         */
        <AppBarContainer>
            <AppBarHeader>Ramon's Farm</AppBarHeader>
            <MyList type={'row'}>
                <ListText>Home</ListText>
                <ListText>Products & Services</ListText>
            </MyList>
        </AppBarContainer>
    );
};

export default NavBarDesktop;