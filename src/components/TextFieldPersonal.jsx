import PropTypes from "prop-types";
import {TextField, ThemeProvider} from "@mui/material";
import theme from "../styles/AppStyle.js";

function TextFieldPersonal({content}) {

    return (
        <ThemeProvider theme={theme}>
            <TextField
                label={content}
                variant="outlined"
                color={"secondary"}
            />
        </ThemeProvider>
    );
}

TextFieldPersonal.propTypes = {
    content: PropTypes.string.isRequired
}

export default TextFieldPersonal;