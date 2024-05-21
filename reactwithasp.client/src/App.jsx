import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [forecasts, setForecasts] = useState();

    useEffect(() => {
        populateWeatherData();
    }, []);

    const contents = forecasts === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. </em></p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
            {/*<thead>*/}
            {/*    <tr>*/}
            {/*        <th>Date</th>*/}
            {/*        <th>Temp. (C)</th>*/}
            {/*        <th>Temp. (F)</th>*/}
            {/*        <th>Summary</th>*/}
            {/*    </tr>*/}
            {/*</thead>*/}
            {/*<tbody>*/}
            {/*    {forecasts.map(forecast =>*/}
            {/*        <tr key={forecast.date}>*/}
            {/*            <td>{forecast.date}</td>*/}
            {/*            <td>{forecast.temperatureC}</td>*/}
            {/*            <td>{forecast.temperatureF}</td>*/}
            {/*            <td>{forecast.summary}</td>*/}
            {/*        </tr>*/}
            {/*    )}*/}
            {/*</tbody>*/}


            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(cookie =>
                    <tr key={cookie.date}>
                        <td>{cookie.name}</td>

                    </tr>
                )}
            </tbody>


        </table>;

    return (
        <div>
            <h1 id="tabelLabel">Cookies</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );
    
    async function populateWeatherData() {
        const response = await fetch('weatherforecast');  //this currently has my cookie stuff.  I'm not able to call the cookie endpoint.
        const data = await response.json();
        setForecasts(data);
    }
}

export default App;