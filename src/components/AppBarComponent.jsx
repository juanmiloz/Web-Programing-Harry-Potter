import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginDispatch, logout} from "../redux/reducers/authSlice.js";

const AppBarComponent = () => {

    const elements = ["characters","movies","potions"]
    const dispatch = useDispatch()

    const renderOptions = () => {
        return elements.map((option, index) =>
            <Link to={option} key={index}>
                <Button sx={{color: '#fff'}} style={{marginLeft: '10px', marginRight: '10px'}}>
                    {option}
                </Button>
            </Link>
        )
    }

    return (
        <AppBar component="nav" style={{ position: 'sticky', top: 0 }}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={null}
                    sx={{mr: 2, display: {sm: 'none'}}}
                >
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                >
                    Harry Potter
                </Typography>
                <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                    {
                        renderOptions()
                    }
                    <Button variant={"outlined"} style={{ color:"#FFFFFF",  border: "1px solid white", marginLeft: "10px"}} onClick={dispatch(logout())}>logout</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default AppBarComponent;
