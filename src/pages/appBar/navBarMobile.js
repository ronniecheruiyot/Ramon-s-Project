import React from "react";
import {AppBarContainer, AppBarHeader, MyList} from "../../styles/appBar";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {NavLink} from "react-router-dom";

const NavBarMobile = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
        // console.log("event.currentTarget", event.currentTarget)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemSelected = (page) => {
        console.log("selected value", page);
        // page === "home" ? <NavLink></NavLink> : ""
        handleClose();
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
                <NavLink to={'/'}>
                    <MenuItem key={'home'} value={'home'} onClick={() => handleMenuItemSelected('home')}>
                        Home
                    </MenuItem>
                </NavLink>
                <NavLink to={'/'}>
                    <MenuItem key={'products'} value={'products'} onClick={() => handleMenuItemSelected('products')}>
                        Products
                    </MenuItem>
                </NavLink>
                <NavLink to={'/'}>
                    <MenuItem key={'contact'} value={'contact'} onClick={() => handleMenuItemSelected('contact')}>
                        Contact
                    </MenuItem>
                </NavLink>
            </Menu>
            <AppBarHeader textAlign={'center'} > Ramon's Farm </AppBarHeader>
        </AppBarContainer>
    );
};

export default NavBarMobile;