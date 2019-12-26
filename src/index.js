import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeatherManager from './components/WeatherManager/WeatherManager.jsx'

ReactDOM.render(
    (<div style={{
                    width:"100%",
                    height:"100%",
                }}>
        <WeatherManager />
    </div>)
  ,
    document.getElementById('root')
);