import React from 'react';
import { Link } from 'react-router-dom';
import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen';
import { Grid } from '@mui/material'
import { IconContext } from 'react-icons';
import { WiDaySunny } from 'react-icons/wi';
import { Typography } from '@material-ui/core';

const WelcomePage = () => {
    return (
        <div>
            <WelcomeScreen>
                <Grid container
                    direction='column'
                    justify='center'
                    className='full'>
                    <div className='highlight'>
                        <Grid container item xs={12}
                            justify='center'
                            alignItems='center'>
                            <Grid item container 
                                justifyContent='center'>
                                <IconContext.Provider value={{ size: '6em' }}>
                                    <WiDaySunny />
                                </IconContext.Provider>
                            </Grid>
                            <Grid container
                                item
                                direction='column'
                                justify='center'
                                alignItems='center'>
                                <Typography variant='h4' color='inherit'>
                                    Weather App
                                </Typography>
                                <Link to='/main' style={{ textDecoration: 'none', color:'inherit' }}> Ingresar </Link>

                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </WelcomeScreen>
        </div>
    );
};



export default WelcomePage;