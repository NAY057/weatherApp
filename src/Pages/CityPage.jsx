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
import 'moment/locale/es'
import useCityPage from '../hooks/useCityPage';
import useCityList from '../hooks/useCityList';
import {getCityCode} from '../utils/utils';
import { getCountryNameByCountryCode } from '../utils/serviceCities';

const CityPage = ({data, actions}) => {
	const {onSetAllWeather,onSetChartData,onSetForecastItemList} = actions
	const {allWeather,allChartData,allForecastItemList} = data
	const {city,countryCode} = useCityPage(onSetChartData,onSetForecastItemList,allChartData,allForecastItemList)
	const cities = useMemo(() => ([{city, countryCode}]), [city, countryCode]) 
	// se usa el hook useMemo que guarda en memoria la ultima instancia del objeto para eviter un bucle infinito de renderizaciones que a su vez llaman la api muchas veces
	// si el hook detecta que los objetos cambiaron entonces crea una nueva instancia de ellos
	useCityList(cities,allWeather,onSetAllWeather)
	const cityCode = getCityCode(city, countryCode)
	const weather = allWeather[cityCode];
	const chartData = allChartData[cityCode]
	const forecastItemList = allForecastItemList[cityCode]
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