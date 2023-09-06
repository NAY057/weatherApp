import moment from 'moment/moment';

const getChartData = (data) => {
    const daysAhead = [0,1,2,3,4,5]
    //aqui se usa el paquete MOMENT
    const days = daysAhead.map( d => moment().add(d,'d'))
    const dataAux = days.map(day => {
        //se trae la informacion de los dias a predecir y luego se compara la coincidencia del dia del año para luego obtener el min y max de ese dia
        const temObjArray = data.list.filter(item => {
            const dayOfYear = moment.unix(item.dt).dayOfYear()
            return dayOfYear === day.dayOfYear()
        })

        console.log('temObjArray:', temObjArray)
        console.log('dayOfYear:', day.dayOfYear())

        const temps = temObjArray.map(item => item.main.temp)
        debugger
        const toCelsius = (temp) => Number((temp - 273.15).toFixed(0))

        
        // dayHour, min ,max
        return ({
            dayHour: day.format('ddd'),
            min: toCelsius(Math.min(...temps)),
            max: toCelsius(Math.max(...temps)),
            hasTemps: (temps.length > 0 ? true : false)
        })
    }).filter(item => item.hasTemps)

    return dataAux
}

export default getChartData
