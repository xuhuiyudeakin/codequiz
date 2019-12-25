import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state={city: "Melbourne", json: null};
        this.cityOnChange = this.cityOnChange.bind(this);
    }

    weathers = {
        "Smoke": "//img.588ku.com/gif/19/07/09/839ff5794335ee032940a645d3e2cc78.gif!qk277",
        "Rain" : "//img.588ku.com/gif/19/07/09/5712839d24d8ef9771616da33b78db04.gif!qk277",
        "Clouds" : "//img.588ku.com/gif/19/08/14/461f08a247716cbbd12ade4af3c36298.gif!qk277",
        "Snow": "//img.588ku.com/gif/19/12/04/cac541cece02504a5914b9d86f6c2228.gif!qk277",
        "Clear": "//img.588ku.com/gif/19/07/09/a17f4cca838165237ac1c77d71b51c36.gif!qk277"
    };

    getData(city) {
        const appID= "1545da9cf2716023c3dc1ea611cc7996";
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appID}`;
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    console.dir(result);
                    this.setState({
                        json: result
                    });
                }
            )
    }

    componentDidMount() {
        //this.getData(this.state.city);
    }

    cityOnChange(e) {
        let city = e.target.value;
        this.setState({
            city: city
        });

    }


    render() {
        this.getData(this.state.city);
        return (
            <div style={{
                    width:"100%",
                    height:"100%",
                }}>
                <select value={this.state.city} onChange={this.cityOnChange}>
                    <option value="Melbourne">Melbourne</option>
                    <option value="Tokyo">Tokyo</option>
                    <option value="Beijing">Beijing</option>
                    <option value="Delhi">Delhi</option>
                </select>
                <h1>The weather of {this.state.city} is {this.state.json ? this.state.json.weather[0].main : null}</h1>

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
                        <img src={this.state.json?  this.weathers[this.state.json.weather[0].main] : ""} title={this.state.json ? this.state.json.weather[0].main : ""} style={{height:"100%", weight:"100%", border: 0}}/>
                    </div>
                    <div>
                        <ol>
                            <li>
                                wind: {this.state.json ? JSON.stringify(this.state.json.wind) : ""}
                            </li>
                            <li>
                                humidity: {this.state.json ? JSON.stringify(this.state.json.main.humidity) : ""}
                            </li>
                            <li>
                                Temperature: humidity: {this.state.json ? JSON.stringify(this.state.json.main.temp) : ""}
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

        );
    }
}

ReactDOM.render(
    (<div style={{
                    width:"100%",
                    height:"100%",
                }}>
        <Weather />
    </div>)
  ,
    document.getElementById('root')
);