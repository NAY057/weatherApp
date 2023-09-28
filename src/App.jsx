import React,{useState} from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import logo from './logo.svg';
// import CityInfo from './components/CityInfo';
// import Weather from './components/Weather';
// import CityList from './components/CityList/CityList';
// import Forecast from './components/Forecast';
// import ForecastChart from './components/ForecastChart';
import './App.css';
import WelcomePage from './Pages/WelcomePage';
import MainPage from './Pages/MainPage';
import CityPage from './Pages/CityPage';
import NotFound from './Pages/NotFound';
import Grid from '@mui/material/Grid';
const App = () => {
  const [allWeather, setAllWeather] = useState({})

  return (
    <div className="App">
       <header className="App-header">
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<WelcomePage/>}/>
                <Route exact path="/main" element={<MainPage allWeather={allWeather} onSetAllWeather={setAllWeather}/>}/>
                <Route exact path="/city/:countryCode/:city" element={<CityPage allWeather={allWeather} onSetAllWeather={setAllWeather}/>}/>
                {/*/city/:countryCode/:city
                los dos puntos indican que la url lleva mas atributos, en este caso lleva dos.
                */}
                <Route path="*" element={<NotFound/>} />
              </Routes>
            </BrowserRouter>
       </header>
     </div>
  );
}

export default App;
