import React from "react";
import {Grid, Modal} from "@mui/material"
import {styled} from "@mui/system"
import AppBar from "./appBar/appBar";
import Typography from "@mui/material/Typography";

export default function Products() {
    return(
        <div>
            <AppBar/>
            <Typography variant={'h5'}>Products page</Typography>

        </div>
    )
}