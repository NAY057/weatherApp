import moment from 'moment/moment';
import { toCelsius } from './../../utils/utils';

const getForecastItemList = (data) => {
    const interval = [4,8,12,16,20]
    const forecastItemListAux = data.list
    .filter((item,index) => interval.includes(index))
    .map(item => {
        console.log(moment.unix(item.dt).format('dddd'))
        return ({
            hour: moment.unix(item.dt).hour(),
            weekDay: moment.unix(item.dt).format('dddd'),
            state: item.weather[0].main.toLowerCase(),
            temperature: toCelsius(item.main.temp)
        })
    })
    return forecastItemListAux
}

export default getForecastItemList