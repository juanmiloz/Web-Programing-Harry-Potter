import {TextField} from "@mui/material";
import PropTypes from "prop-types";

const MyField = ({label, placeholder, field, isPassword}) => {
    return (
        <TextField required label={label} placeholder={placeholder} {...field} type={isPassword?"password":"text"}/>
    )
}

MyField.propTypes = {
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    field: PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.any,
        onChange: PropTypes.func.isRequired,
        onBlur: PropTypes.func.isRequired
    }).isRequired,
    isPassword: PropTypes.bool.isRequired
}

export default MyField;
