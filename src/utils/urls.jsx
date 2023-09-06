const appid = '661aa9e8bbe890ab634e5ae5ad4b6e4e'
export const getWeatherUrl = ({city,countryCode}) => `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`

export const getForecastUrl = ({city,countryCode}) => `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`