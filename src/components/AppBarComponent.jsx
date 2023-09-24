import React from 'react';
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const AppBarComponent = () => {
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
                    <Link to={"characters"}>
                        <Button sx={{color: '#fff'}} style={{marginLeft: '10px', marginRight: '10px'}}>
                            Characters
                        </Button>
                    </Link>
                    <Link to={"movies"}>
                        <Button sx={{color: '#fff'}} style={{marginLeft: '10px', marginRight: '10px'}} >
                            Movies
                        </Button>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default AppBarComponent;
