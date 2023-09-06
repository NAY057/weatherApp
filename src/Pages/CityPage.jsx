import React from 'react';
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
	// const city = 'Popayan'
	// const country = 'Colombia'
	return (
		<AppFrame>
			<Grid container color='white' justifyContent="space-around" margin="auto" alignItems="center" spacing={2}>
				<Grid item container justifyContent="center" margin="auto" alignItems="flex-end" xs={12}>
					<CityInfo city={city} country={countryCode} />
				</Grid>
				<Grid container item justifyContent="center" xs={12}>

						<Weather temperature={10} state="clear" />
						<WeatherDetails humidity={70} wind={15} />
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