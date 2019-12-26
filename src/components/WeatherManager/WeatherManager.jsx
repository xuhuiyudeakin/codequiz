import React, {useState, useEffect} from 'react';


// What is the difference between a functional component and a class based component?
/*
    A functional component is based on functional programming, we use functions to handle component structure and lifecycle
    A class component uses Object Orientated Programming, we use instances of a classes and their internal properties to manage component structure and lifecycle
*/

//  Which type of component are you using? (class or functional?)
// You are using class components instead of functional components

// Why do we use functional components instead of class components?
/*
    The main reason why is they produce less side effects (less things go wrong that we can't figure out where the bug is)
*/

// 1. convert from class to functional component
// 2, break down large parent into parent and multiple children components


export default ()=>{
    const [city, setCity] = useState("beijing");
    const [weatherResult, setWeatherResult] = useState(null);

    const weathers = {
        "Smoke": "//img.588ku.com/gif/19/07/09/839ff5794335ee032940a645d3e2cc78.gif!qk277",
        "Rain" : "//img.588ku.com/gif/19/07/09/5712839d24d8ef9771616da33b78db04.gif!qk277",
        "Clouds" : "//img.588ku.com/gif/19/08/14/461f08a247716cbbd12ade4af3c36298.gif!qk277",
        "Snow": "//img.588ku.com/gif/19/12/04/cac541cece02504a5914b9d86f6c2228.gif!qk277",
        "Clear": "//img.588ku.com/gif/19/07/09/a17f4cca838165237ac1c77d71b51c36.gif!qk277"
    };

    
    
    useEffect(() =>{
        const appID= "8d38f95c1eb756340a0e445f1bed178f";
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appID}`;
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    console.dir(result);
                    setWeatherResult(result);
                }
            )
    }, [city])


    return (
        <div style={{
                width:"100%",
                height:"100%",
            }}>
            <select value={city} onChange={e => setCity(e.target.value)}>
                <option value="Melbourne">Melbourne</option>
                <option value="Tokyo">Tokyo</option>
                <option value="Beijing">Beijing</option>
                <option value="Delhi">Delhi</option>
            </select>
            <h1>The weather of {city} is {weatherResult ? weatherResult.weather[0].main : null}</h1>

            <div style={{
                width:"100%",
                height:"100%",
            }}>
                <div style={
                    {
                        width:"100%",
                        height:"100%",
                        position:"fixed",
                        top:0,
                        left:0,
                        bottom:0,
                        right:0,
                        zIndex:-1,
                    }
                }>
                    <img src={weatherResult?  weathers[weatherResult.weather[0].main] : ""} title={weatherResult ? weatherResult.weather[0].main : ""} style={{height:"100%", weight:"100%", border: 0}}/>
                </div>
                <div>
                    <ol>
                        <li>
                            wind: {weatherResult ? JSON.stringify(weatherResult.wind) : ""}
                        </li>
                        <li>
                            humidity: {weatherResult ? JSON.stringify(weatherResult.main.humidity) : ""}
                        </li>
                        <li>
                            Temperature: humidity: {weatherResult ? JSON.stringify(weatherResult.main.temp) : ""}
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}
