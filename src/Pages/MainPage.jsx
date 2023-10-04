import React from 'react';
import { useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
import AppFrame from './../components/AppFrame';
import CityList from './../components/CityList'
import {getCities} from './../utils/serviceCities'
// const cities = [
//     { city: 'Popayan', country: 'Colombia', countryCode: 'CO'},
//     { city: 'Cali', country: 'Colombia', countryCode: 'CO'} ,
//     { city: 'Medellin', country: 'Colombia', countryCode: 'CO'}, 
//     { city: 'Bogota', country: 'Colombia', countryCode: 'CO'} ,
//     { city: 'Buenos aires', country: 'Argentina', countryCode: 'AR'} ,
//     { city: 'Ciudad de Mexico', country: 'Mexico', countryCode: 'MX'} ,
//     { city: 'Madrid', country: 'España', countryCode: 'ES'} 
// ]

const MainPage = ({actions,data}) => {
    const navigate = useNavigate();
    
    const onClickHandler = (city, countryCode) => {
        console.log(city, countryCode)
        navigate(`/city/${countryCode}/${city}`)
    }
    return (
        <AppFrame>
            <CityList data={data} actions={actions} cities={getCities()} onClickCity={onClickHandler}/>
        </AppFrame>
    );
};



export default MainPage;