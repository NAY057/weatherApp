import {useState, useEffect, useDebugValue} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import moment from 'moment/moment';
import 'moment/locale/es'
import { getForecastUrl } from '../utils/urls';
// import { toCelsius } from '../utils/utils';
import getChartData from './../utils/transform/getChartData'
import getForecastItemList from './../utils/transform/getForecastItemList'
const useCityPage = () => {
	const [chartData,setChartData] = useState(null)
	const [forecastItemList,setForecastItemList] = useState(null)
	const {city, countryCode} = useParams()
	// console.log('estos son los params!!!',params)
	//el useDebugValue es como un console.log pero este se usa con el react components en la consola
	useDebugValue(`test useDebugValue: ${city}`)
	useEffect(()=>{
		const getForecast = async() => {
            const url = getForecastUrl({city,countryCode})
			try {
				const {data} = await axios.get(url)
				const dataAux = getChartData(data)
				setChartData(dataAux)
				const forecastItemListAux = getForecastItemList(data) 
				setForecastItemList(forecastItemListAux)
			} catch (error) {
				console.log(error)
			}
		}
		getForecast()
	},[city,countryCode])

	return {chartData, forecastItemList, city,countryCode}
}

export default useCityPage