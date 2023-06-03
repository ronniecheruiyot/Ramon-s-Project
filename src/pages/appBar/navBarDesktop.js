import React from "react";
import {AppBarContainer, AppBarHeader, ListText, MyList} from "../../styles/appBar";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import {useRef} from 'react';

const NavBarDesktop = (props) => {
    return (
        /**
         * Container,
         * AppBarHeader,
         * List
         */
        <AppBarContainer>
            <AppBarHeader onClick={props.handleHomeClicked}>Ramon's Farm</AppBarHeader>
            <MyList type={'row'}>
                <ListText onClick={props.handleHomeClicked}>Home</ListText>
                <ListText onClick={props.handleContentClicked}>Products & Services</ListText>
            </MyList>
        </AppBarContainer>
    );
};

export default NavBarDesktop;