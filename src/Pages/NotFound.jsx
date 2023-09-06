import React from 'react';
// import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import { Grid } from '@mui/material'
// import { IconContext } from 'react-icons';
// import { WiDaySunny } from 'react-icons/wi';
// import { IconContext } from 'react-icons';
// import { WiDayFog } from 'react-icons/wi';
// import {WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain} from 'react-icons/wi'
// import { IconContext } from 'react-icons';
import { Typography } from '@material-ui/core';
const NotFound = () => {
    return (
        <div>
                <Grid container
                    direction='column'
                    justify='center'
                    className='full'>
                    <div className='highlight'>
                        <Grid container item xs={12}
                            justify='center'
                            alignItems='center'>
                            <Grid container
                                item
                                direction='column'
                                justify='center'
                                alignItems='center'>
                                <Typography variant='h4' color='inherit'>
                                    404 | La pagina no existe
                                </Typography>
                                <Link to='/main' style={{ textDecoration: 'none', color:'inherit' }}> Volver al inicio </Link>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
        </div>
    );
};



export default NotFound;