import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import { IconContext } from 'react-icons';
import { WiDayFog } from 'react-icons/wi';
import {Link as LinkRouter} from 'react-router-dom'
import Typography from '@mui/material/Typography';
const AppFrame = ({children}) => {
    return (
        <Grid container justafy='center'>
            <AppBar position='static'>
                <Toolbar variant='dense'>
                    <IconButton color='inherit' area-label='menu'>
                        <Link component={LinkRouter} to='/main' color='inherit' area-label='menu'>
                            <IconContext.Provider value={{size:'2em'}}>
                                <WiDayFog/>
                            </IconContext.Provider>
                        </Link>
                    </IconButton>
                    <Typography variant='h6' color='inherit'>
                        Weather App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid item margin="auto" xs={12} sm={11} md={10} lg={8}> 
                {children}
            </Grid>
        </Grid>
    );
};

AppFrame.propTypes = {
    children: PropTypes.node 
};

export default AppFrame;