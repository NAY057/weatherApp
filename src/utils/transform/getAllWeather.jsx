import { getCityCode, toCelsius } from './../../utils/utils' 

const getAllWeather = (response, city, countryCode) => {
    const { data } = response
					// const temperature = (data.main.temp - 273.15).toFixed(0) //convercion a de grados K a C° | tambien se puede user la libreria convert units
					const temperature = toCelsius(data.main.temp)
					const state = data.weather[0].main.toLowerCase()
					// const propName = `${city}-${country}` //ej: [Ciudad de Mexico-Mexico]
					const propName = getCityCode(city, countryCode) //ej: [Ciudad de Mexico-Mexico]
					const propValue = {temperature, state} //ej: {temperature: 10, state: "sunny"}
                    return ({[propName]: propValue})
}

export default getAllWeather