// const cities = [
//     { city: 'Popayan', country: 'Colombia', countryCode: 'CO'},
//     { city: 'Cali', country: 'Colombia', countryCode: 'CO'} ,
//     { city: 'Medellin', country: 'Colombia', countryCode: 'CO'}, 
//     { city: 'Bogota', country: 'Colombia', countryCode: 'CO'} , 
//     { city: 'Manizales', country: 'Colombia', countryCode: 'CO'} , 
//     { city: 'Buenos aires', country: 'Argentina', countryCode: 'AR'} ,
//     { city: 'Ciudad de Mexico', country: 'Mexico', countryCode: 'MX'} ,
//     { city: 'Madrid', country: 'España', countryCode: 'ES'} 
// ]
const cities = [
    { city: 'Bogotá', country: 'Colombia', countryCode: 'CO' },
    { city: 'Medellín', country: 'Colombia', countryCode: 'CO' },
    { city: 'Cali', country: 'Colombia', countryCode: 'CO' },
    { city: 'Barranquilla', country: 'Colombia', countryCode: 'CO' },
    { city: 'Cartagena', country: 'Colombia', countryCode: 'CO' },
    { city: 'Cúcuta', country: 'Colombia', countryCode: 'CO' },
    { city: 'Bucaramanga', country: 'Colombia', countryCode: 'CO' },
    { city: 'Pereira', country: 'Colombia', countryCode: 'CO' },
    { city: 'Santa Marta', country: 'Colombia', countryCode: 'CO' },
    { city: 'Ibagué', country: 'Colombia', countryCode: 'CO' },
    { city: 'Pasto', country: 'Colombia', countryCode: 'CO' },
    { city: 'Manizales', country: 'Colombia', countryCode: 'CO' },
    { city: 'Neiva', country: 'Colombia', countryCode: 'CO' },
    { city: 'Villavicencio', country: 'Colombia', countryCode: 'CO' },
    { city: 'Montería', country: 'Colombia', countryCode: 'CO' },
    { city: 'Valledupar', country: 'Colombia', countryCode: 'CO' },
    { city: 'Popayán', country: 'Colombia', countryCode: 'CO' },
    { city: 'Armenia', country: 'Colombia', countryCode: 'CO' },
    { city: 'Tunja', country: 'Colombia', countryCode: 'CO' },
    { city: 'Florencia', country: 'Colombia', countryCode: 'CO' },
    { city: 'Quibdó', country: 'Colombia', countryCode: 'CO' },
    { city: 'Mocoa', country: 'Colombia', countryCode: 'CO' },
    { city: 'San José del Guaviare', country: 'Colombia', countryCode: 'CO' },
    { city: 'Riohacha', country: 'Colombia', countryCode: 'CO' },
    { city: 'Leticia', country: 'Colombia', countryCode: 'CO' },
    { city: 'Sincelejo', country: 'Colombia', countryCode: 'CO' },
    { city: 'Yopal', country: 'Colombia', countryCode: 'CO' },
    { city: 'Tumaco', country: 'Colombia', countryCode: 'CO' },
    { city: 'Maicao', country: 'Colombia', countryCode: 'CO' },
    { city: 'Buenaventura', country: 'Colombia', countryCode: 'CO' },
    { city: 'Arauca', country: 'Colombia', countryCode: 'CO' },
    { city: 'Mitú', country: 'Colombia', countryCode: 'CO' }
]

export const getCities = () => cities

export const getCountryNameByCountryCode = (countryCode) => (
    cities.filter(c => c.countryCode === countryCode)[0].country
)