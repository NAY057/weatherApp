import {useState, useEffect} from 'react';
import axios from 'axios';
import { getWeatherUrl } from '../utils/urls';
import getAllWeather from '../utils/transform/getAllWeather';
import {getCityCode} from '../utils/utils';

const useCityList = (cities,allWeather,onSetAllWeather) => {
	const [error, setError] = useState(null)

	useEffect(() => {
		const setWeather = async(city, countryCode) => {
			const url = getWeatherUrl({city,countryCode})
			try {	
				const propName = getCityCode(city, countryCode)
				onSetAllWeather({ [propName] : {} })
					const response = await axios.get(url)
					const allWeatherAux = getAllWeather(response, city , countryCode)
					onSetAllWeather(allWeatherAux)
				} catch (error) {
						if(error.response){
							//errores que nos responde el server
							const {data, status} = error.response
							console.log('data', data)
							console.log('status', status)
							setError('Ha ocurrido un error en el servidor del clima')
						} else if (error.request){
							//errores que suceden por no llegar al server
							console.log('Server in-accesible o no tengo internet')
							setError('Verifique la conexion')
						}else{
							console.log('Errores imprevistos')
							setError('error al cargar los datos')
						}
					
				}
		}

		cities.forEach(({city, countryCode}) => {
			if(!allWeather[getCityCode(city, countryCode)]){
				setWeather(city, countryCode)
			}
		});
		// si hay un estado en el useEffect SI O SI tiene que ir en el array de dependencias.
	}, [cities, onSetAllWeather, allWeather])//este es el array de dependencias

	return {error, setError}
}

export default useCityList