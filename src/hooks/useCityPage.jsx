import { useEffect, useDebugValue} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import moment from 'moment/moment';
import 'moment/locale/es'
import { getForecastUrl } from '../utils/urls';
// import { toCelsius } from '../utils/utils';
import getChartData from './../utils/transform/getChartData'
import getForecastItemList from './../utils/transform/getForecastItemList'
import {getCityCode} from '../utils/utils';
const useCityPage = (actions,allChartData,allForecastItemList) => {

	const {city, countryCode} = useParams()
	// console.log('estos son los params!!!',params)
	//el useDebugValue es como un console.log pero este se usa con el react components en la consola
	useDebugValue(`test useDebugValue: ${city}`)
	useEffect(()=>{
		const cityCode = getCityCode(city, countryCode)
		const getForecast = async() => {
            const url = getForecastUrl({city,countryCode})
			try {
				const {data} = await axios.get(url)
				const dataAux = getChartData(data)
				// onSetChartData({[cityCode]:dataAux})
				actions({type: 'SET_CHART_DATA', payload:{[cityCode]:dataAux}})
				const forecastItemListAux = getForecastItemList(data) 
				// onSetForecastItemList({[cityCode]:forecastItemListAux})
				actions({type: 'SET_FORECAST_ITEM_LIST', payload:{[cityCode]:forecastItemListAux}})
			} catch (error) {
				console.log(error)
			}
		}
		if(allChartData && allForecastItemList && !allChartData[cityCode] && !allForecastItemList[cityCode]){
			getForecast()
		}
	},[city,countryCode,actions,allChartData,allForecastItemList])

	return {city,countryCode}
}

export default useCityPage