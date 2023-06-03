import createTheme from "@mui/material/styles/createTheme";

export const colors = {
    primary: '#0047AB', //Turquoise
    secondary: '#ADD8E6', //Light blue
    lightgray: '#d3d3d3',
    black: '#000',
    white: '#fff'
};
const theme = createTheme({
    palette: {
        primary: {
            main: colors.primary
        },
        secondary: {
            main: colors.secondary
        }
    }
});

export default theme;