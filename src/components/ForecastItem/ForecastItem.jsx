import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import IconState, { validValues } from './../IconState';
import { IconContext } from 'react-icons';
const ForecastItem = ({ weekDay, hour, state, temperature }) => {
	return (
		<Grid container
			direction='column'
			justifyContent='center'
			alignItems='center'
		>
			<Grid item>
				<p>{weekDay}</p>
			</Grid>
			<Grid item>
				<p>{hour}</p>
			</Grid>
			<Grid item>
				<IconContext.Provider value={{ size: '5em' }}>
					<IconState state={state} />
				</IconContext.Provider>
			</Grid>
			<Grid item>
				<p>{temperature}°</p>
			</Grid>

		</Grid>
	);
};

ForecastItem.propTypes = {
	weekDay: PropTypes.string.isRequired,
	hour: PropTypes.number.isRequired,
	state: PropTypes.oneOf(validValues).isRequired,
	temperature: PropTypes.number.isRequired,
};

export default ForecastItem;