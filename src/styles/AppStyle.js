import {createTheme} from "@mui/material";


const Color = {
    primary: "#235531",
    secondary: "#ff2339"
}

const theme = createTheme({
    palette: {
        primary: {
            main: Color.primary
        },
        secondary: {
            main: Color.secondary
        }
    }
})

export default theme;