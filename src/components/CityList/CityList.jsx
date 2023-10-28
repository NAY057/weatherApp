import React from 'react';
import PropTypes from 'prop-types';
// import Grid from '@material-ui/core/Grid';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert'
import CityInfo from '../CityInfo';
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import Weather from '../Weather';
import useCityList from '../../hooks/useCityList';
import { getCityCode } from '../../utils/utils';
// import Paper from '@mui/material/Paper'
// import { useNavigate } from 'react-router-dom';

const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
	const { city, countryCode, country } = cityAndCountry
	console.log(weather)
	return (
		<ListItem key={getCityCode(city, countryCode)}  button onClick={()=>eventOnClickCity(city, countryCode)}>
			<Grid container justifyContent="center" alignItems="center">
				<Grid item md={9} xs={12}>
					<CityInfo city={city} country={country} />
				</Grid>

				<Grid item md={3} xs={12}>
					<Weather temperature={weather && weather.temperature} state={weather && weather.state} />
				</Grid>
			</Grid>
		</ListItem>
		// El operador && sirve para evaluar si weather es indefinido, si realmente es indefinido entonces no sigue evaluando
		// a weather.temperature y de esta manera se evita romper el codigo.
	)
}
// const cities = [
//     { city: 'Popayan', country: 'COL'},
//     { city: 'Cali', country: 'COL'} ,
//     { city: 'Medellin', country: 'COL'},  
//     { city: 'Bogota', country: 'COL'} 
//    ]



const CityList = ({ cities, onClickCity, actions, data  }) => {
	// const {onSetAllWeather} = actions
	const {allWeather} = data
	const {error, setError} = useCityList(cities,allWeather,actions)
	// const weather= {temperature: 10, state: "clear"}
	return (
		<div>
			{
				error && <Alert onClose={()=> setError(null)} severity='error'>{error}</Alert>
			}
			<List>
				{   
				// la tecnica de pasar dos funciones se llama curring y se suele utilizar bastante con la funcion map, esta se puede ver en los parametro
				// que se le pasan a renderCityAndCountry en la linea 44
					cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, 
						// allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
						allWeather[getCityCode(cityAndCountry.city,cityAndCountry.countryCode)]))
				}
			</List>
		</div>
	);
};

CityList.propTypes = {
	// cities: PropTypes.array.isRequired
	// cities: ptshr
	cities: PropTypes.arrayOf(PropTypes.shape({
		city: PropTypes.string.isRequired,
		country: PropTypes.string.isRequired,
		countryCode: PropTypes.string.isRequired
	})).isRequired
};

export default CityList;