import React, { useState, useCallback, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
// import CityInfo from './components/CityInfo';
// import Weather from './components/Weather';
// import CityList from './components/CityList/CityList';
// import Forecast from './components/Forecast';
// import ForecastChart from './components/ForecastChart';
import "./App.css";
import WelcomePage from "./Pages/WelcomePage";
import MainPage from "./Pages/MainPage";
import CityPage from "./Pages/CityPage";
import NotFound from "./Pages/NotFound";
import Grid from "@mui/material/Grid";
const App = () => {
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
                  data={data}
                  actions={actions}
                />
              }
            />
            <Route
              exact
              path="/city/:countryCode/:city"
              element={
                <CityPage
                  data={data}
                  actions={actions}
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
