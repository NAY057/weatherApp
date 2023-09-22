import React, {useMemo} from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom'
import CityInfo from './../components/CityInfo';
import Weather from './../components/Weather';
// import CityList from './../components/CityList/CityList';
import Forecast from './../components/Forecast';
import ForecastChart from './../components/ForecastChart';
import WeatherDetails from '../components/WeatherDetails';
import LinearProgress from '@mui/material/LinearProgress';
import { Grid } from '@mui/material'
import AppFrame from '../components/AppFrame';
// import convertUnits from 'convert-units';
//la importacion de moment/locale/es hace que los dias esten en español
import 'moment/locale/es'
import useCityPage from '../hooks/useCityPage';
import useCityList from '../hooks/useCityList';
import {getCityCode} from '../utils/utils';
import { getCountryNameByCountryCode } from '../utils/serviceCities';
// const forecastItemListExample = [
// 	{ hour: 18, state: "clear", temperature: 17, weekDay: "Jueves" },
// 	{ hour: 6, state: "clouds", temperature: 18, weekDay: "Viernes" },
// 	{ hour: 12, state: "drizzle", temperature: 18, weekDay: "Viernes" },
// 	{ hour: 18, state: "clouds", temperature: 19, weekDay: "Viernes" },
// 	{ hour: 6, state: "rain", temperature: 17, weekDay: "Sábado" },
// 	{ hour: 12, state: "rain", temperature: 17, weekDay: "Sábado" },
// ]
// const dataExample = [
// 	{
// 		"dayHour": "Jue 18",
// 		"min": 14,
// 		"max": 22,
// 	},
// 	{
// 		"dayHour": "Vie 06",
// 		"min": 18,
// 		"max": 27,
// 	},
// 	{
// 		"dayHour": "Vie 12",
// 		"min": 18,
// 		"max": 28,
// 	},
// 	{
// 		"dayHour": "Vie 18",
// 		"min": 18,
// 		"max": 25,
// 	},
// 	{
// 		"dayHour": "Sab 06",
// 		"min": 15,
// 		"max": 22,
// 	},
// 	{
// 		"dayHour": "Sab 12",
// 		"min": 12,
// 		"max": 19,
// 	}
// ]

const CityPage = () => {

	const {chartData,forecastItemList,city,countryCode} = useCityPage()
	const cities = useMemo(() => ([{city, countryCode}]), [city, countryCode]) 
	// se usa el hook useMemo que guarda en memoria la ultima instancia del objeto para eviter un bucle infinito de renderizaciones que a su vez llaman la api muchas veces
	// si el hook detecta que los objetos cambiaron entonces crea una nueva instancia de ellos
	const {allWeather} = useCityList(cities)
	const weather = allWeather[getCityCode(city, countryCode)];
	const state = weather && weather.state;
	const temperature = weather && weather.temperature;
	const country = countryCode && getCountryNameByCountryCode(countryCode);
	const wind = weather && weather.wind;
	const humidity = weather && weather.humidity;
	return (
		<AppFrame>
			<Grid container color='white' justifyContent="space-around" margin="auto" alignItems="center" spacing={2}>
				<Grid item container justifyContent="center" margin="auto" alignItems="flex-end" xs={12}>
					<CityInfo city={city} country={country} />
				</Grid>
				<Grid container item justifyContent="center" xs={12}>

						<Weather temperature={temperature} state={state} />
						{
							humidity && wind && 
							<WeatherDetails humidity={humidity} wind={wind} />
						
						}
							
				</Grid>
				<Grid item xs={10}>
					{!chartData && !forecastItemList &&  <LinearProgress color="inherit" />}
				</Grid>
				<Grid item xs={10}>
				{ chartData && <ForecastChart data={chartData} />}
				</Grid>
				<Grid item>
				{forecastItemList && <Forecast forecastItemList={forecastItemList} />}
				</Grid>
			</Grid>
		</AppFrame>
	);
};



export default CityPage;