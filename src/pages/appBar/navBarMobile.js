import React from "react";
import {AppBarContainer, AppBarHeader} from "../../styles/appBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const NavBarMobile = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
        // console.log("event.currentTarget", event.currentTarget)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        /**
         * Container,
         * AppBarHeader,
         * List
         */
        <AppBarContainer>
            <IconButton
                aria-label="menu"
                id="menu-button"
                aria-controls={open ? 'menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleMenuClick}
            >
                <MenuIcon/>
            </IconButton>
            <Menu
                id="menu"
                MenuListProps={{
                    'aria-labelledby': 'menu-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {/*<NavLink to={'/'}>*/}
                    <MenuItem key={'home'} value={'home'}
                              onClick={() => {
                                  props.handleHomeClicked();
                                  // handleClose();
                              }}>
                        Home
                    </MenuItem>
                {/*</NavLink>*/}
                {/*<NavLink to={'/'}>*/}
                    <MenuItem key={'products'} value={'products'}
                              onClick={() => {
                                  props.handleContentClicked();
                                  // handleClose();
                              }}>
                        Products
                    </MenuItem>
                {/*</NavLink>*/}
                {/*<NavLink to={'/'}>*/}
                {/*    <MenuItem key={'contact'} value={'contact'} onClick={() => handleMenuItemSelected('contact')}>*/}
                {/*        Contact*/}
                {/*    </MenuItem>*/}
                {/*</NavLink>*/}
            </Menu>
            <AppBarHeader textAlign={'center'} > Ramon's Farm </AppBarHeader>
        </AppBarContainer>
    );
};

export default NavBarMobile;