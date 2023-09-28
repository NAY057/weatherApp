import {useState, useEffect} from 'react';
import axios from 'axios';
import { getWeatherUrl } from '../utils/urls';
import getAllWeather from '../utils/transform/getAllWeather';

const useCityList = (cities, onSetAllWeather) => {
	const [error, setError] = useState(null)

	useEffect(() => {
		const setWeather = async(city, countryCode) => {
			const url = getWeatherUrl({city,countryCode})
			try {
					const response = await axios.get(url)
					const allWeatherAux = getAllWeather(response, city , countryCode)
					/*setAllWeather( allWeather => {//aqui se pasa allWeather com funcion para que el codigo sepa cual es el ultimo objeto en el estado.
						const result = {...allWeather, ...allWeatherAux }
						console.log('Result: ', result)
						return result
						//cuando hay un estado y se una la configuracion anterior para el SetAllWeather se evita tener que poner dos parametros en el array de dependencias 
					})*/
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
				// el .then y .catch es la forma antigua de hacer llamados asincronos (antes del 2017), posteriormente se empezo a usar el async y await
			
			//esta es la forma antigua de hacer llamados asincronos con promises
			// axios
			// .get(url)
			// .then(response => {
				//     const { data } = response
				//     const temperature = (data.main.temp - 273.15).toFixed(0) //convercion a de grados K a C° | tambien se puede user la libreria convert units
				//     const state = data.weather[0].main.toLowerCase()
				//     const propName = `${city}-${country}` //ej: [Ciudad de Mexico-Mexico]
				//     const propValue = {temperature, state} //ej: {temperature: 10, state: "sunny"}
				//     setAllWeather( allWeather => {//aqui se pasa allWeather com funcion para que el codigo sepa cual es el ultimo objeto en el estado.
				//         const result = {...allWeather, [propName]: propValue }
				//         console.log('Result: ', result)
				//         return result
				//         //cuando hay un estado y se una la configuracion anterior para el SetAllWeather se evita tener que poner dos parametros en el array de dependencias 
			//     })
			// })
			// .catch((error) => {
			//     if(error.response){
			//         //errores que nos responde el server
			//         const {data, status} = error.response
			//         console.log('data', data)
			//         console.log('status', status)
			//         setError('Ha ocurrido un error en el servidor del clima')
			//     } else if (error.request){
			//         //errores que suceden por no llegar al server
			//         console.log('Server in-accesible o no tengo internet')
			//         setError('Verifique la conexion')
			//     }else{
			//         console.log('Errores imprevistos')
			//         setError('error al cargar los datos')
			//     }
				
			//     //errores que suceden de manera imprevista o desconocida
			// })
		}

		cities.forEach(({city, countryCode}) => {
			setWeather(city, countryCode)
		});
		// si hay un estado en el useEffect SI O SI tiene que ir en el array de dependencias.
	}, [cities, onSetAllWeather])//este es el array de dependencias

	return {error, setError}
}

export default useCityList