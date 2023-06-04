import React from "react";
import {AppBarContainer, AppBarHeader, ListText, MyList} from "../../styles/appBar";

const NavBarDesktop = (props) => {
    return (
        /**
         * Container,
         * AppBarHeader,
         * List
         */
        <AppBarContainer>
            <AppBarHeader>Ramon's Farm</AppBarHeader>
            <MyList type={'row'}>
                <ListText onClick={props.handleHomeClicked}>Home</ListText>
                <ListText onClick={props.handleContentClicked}>Products & Services</ListText>
            </MyList>
        </AppBarContainer>
    );
};

export default NavBarDesktop;