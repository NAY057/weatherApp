import React, { useState, useCallback, useMemo, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
// import CityInfo from './components/CityInfo';
// import Weather from './components/Weather';
// import CityList from './components/CityList/CityList';
// import Forecast from './components/Forecast';
// import ForecastChart from './components/ForecastChart';
// import Grid from "@mui/material/Grid";
import "./App.css";
import WelcomePage from "./Pages/WelcomePage";
import MainPage from "./Pages/MainPage";
import CityPage from "./Pages/CityPage";
import NotFound from "./Pages/NotFound";
const App = () => {
  const initialValue = {
    allWeather: {},
    allChartData: {},
    allForecastItemList: {}
  }
  //ejemplo del objeto action: action {type: "XXX", payload: "XXX"}
  const reducer = (state,action) => {
    switch (action.type) {
      case 'SET_ALL_WEATHER':
        const weatherCity = action.payload
        const newAllWeather = {...state.allWeather, ...weatherCity}
        return {...state, allWeather:newAllWeather}
      case 'SET_CHART_DATA':
        const chartDataCity = action.payload
        const newAllChartData = {...state.allChartData, ...chartDataCity}
        return {...state, allChartData:newAllChartData}
      case 'SET_FORECAST_ITEM_LIST':
        const forecastItemListCity = action.payload
        const newAllForecastItemListCity = {...state.allForecastItemList, ...forecastItemListCity}
        return {...state, allForecastItemList:newAllForecastItemListCity}
      default:
        return state

    }
  }
  // El hook reducer se suele utilizar cuando se manejan estados mas complejos y tambien tiene incorporado la funcionalidad del Hook useMemo
  //nConcepto Single Source of Truth
  const [state, dispatch] = useReducer(reducer, initialValue)

  /*
  const [allWeather, setAllWeather] = useState({});
  const [allChartData, setAllChartData] = useState({});
  const [allForecastItemList, setAllForecastItemList] = useState({});
  
  
  //el hook useMemo y UseCallback hace los mismo con la diferencia que callback no requiere como parametro una arrow function y tambien que es el mas recomendado para estos casos
  const onSetAllWeather = useCallback(
    (weatherCity) =>
      setAllWeather((allWeather) => ({ ...allWeather, ...weatherCity })),
    [setAllWeather]
  );
  const onSetChartData = useCallback(
    (chartDataCity) =>
    setAllChartData((chartData) => ({ ...chartData, ...chartDataCity })),
    [setAllChartData]
  );
  const onSetForecastItemList = useCallback(
    (forecastItemListCity) =>
    setAllForecastItemList((forecastItemList) => ({ ...forecastItemList, ...forecastItemListCity })),
    [setAllForecastItemList]
  );

  const actions = useMemo( () => ({onSetAllWeather,onSetChartData,onSetForecastItemList}), [onSetAllWeather,onSetChartData,onSetForecastItemList])
  const data = useMemo( () => ({allWeather,allChartData,allForecastItemList}), [allWeather,allChartData,allForecastItemList])
*/
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<WelcomePage />} />
            <Route
              exact
              path="/main"
              element={
                <MainPage
                  data={state}
                  actions={dispatch}
                />
              }
            />
            <Route
              exact
              path="/city/:countryCode/:city"
              element={
                <CityPage
                  data={state}
                  actions={dispatch}
                />
              }
            />
            {/*/city/:countryCode/:city
                los dos puntos indican que la url lleva mas atributos, en este caso lleva dos.
                */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
};

export default App;
