import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppFrame from './../components/AppFrame';
import CityList from './../components/CityList'
import {getCities} from './../utils/serviceCities'

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