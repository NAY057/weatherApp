import React from 'react';
import PropTypes from 'prop-types';
import  Typography  from '@material-ui/core/Typography';
//  import {WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain} from 'react-icons/wi'
import { IconContext } from 'react-icons';
// import IconState, {validValues} from '../IconState';
import  Skeleton from '@mui/material/Skeleton';
import {Grid} from '@mui/material'
import IconState, { validValues } from './../IconState'

const Weather = ({temperature, state}) => {
	return (
		<Grid container item direction='row' justifyContent='center' alignItems='center' spacing={1} >
			<IconContext.Provider value={{size:'6em'}}>
				{
					state ? 
						<IconState state={state}/>
						: 
						<Skeleton variant='circle' height={80} width={80}> </Skeleton>
				}
			</IconContext.Provider>
			{
				temperature? 
					<Typography display='inline' variant='h2'> {temperature}° </Typography>
					: 
					<Skeleton variant='rect' height={80} width={80}> </Skeleton>
			}
		</Grid>
	);
};

Weather.propTypes = {
	temperature: PropTypes.number,
	state: PropTypes.oneOf(validValues),
};

export default Weather;