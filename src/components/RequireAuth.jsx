import {Navigate, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";

export default function RequireAuth({children}) {

    const location = useLocation();
    const user = useSelector(state => state.auth.value)
    console.log(user)
    if(user === null){
        return (<Navigate to={"/"} state={{ from: location}} replace/>);
    }

    return children;
}

RequireAuth.propTypes = {
    children: PropTypes.any.isRequired
}