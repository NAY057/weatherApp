const cities = [
    { city: 'Popayan', country: 'Colombia', countryCode: 'CO'},
    { city: 'Cali', country: 'Colombia', countryCode: 'CO'} ,
    { city: 'Medellin', country: 'Colombia', countryCode: 'CO'}, 
    { city: 'Bogota', country: 'Colombia', countryCode: 'CO'} ,
    { city: 'Buenos aires', country: 'Argentina', countryCode: 'AR'} ,
    { city: 'Ciudad de Mexico', country: 'Mexico', countryCode: 'MX'} ,
    { city: 'Madrid', country: 'España', countryCode: 'ES'} 
]

export const getCities = () => cities

export const getCountryNameByCountryCode = (countryCode) => (
    cities.filter(c => c.countryCode === countryCode)[0].country
)