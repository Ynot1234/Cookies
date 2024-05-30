import { useEffect, useState } from 'react';
import './App.css';
import CookieSubmit from './CookieSubmit'
function AppCookie() {
    const [cookies, setCookies] = useState();

    useEffect(() => {
        populateCookieData();
    }, []);

    const contents = cookies === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. </em></p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">

            <thead>
                <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Desc</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {cookies.map(cookie =>
                    <tr key={cookie.date}>
                        <td>{cookie.date}</td>
                        <td>{cookie.name}</td>
                        <td>{cookie.desc}</td>
                        <td>{cookie.price}</td>

                    </tr>
                )}
            </tbody>
        </table>;

  
    return (
        <div>
            <h1 id="tabelLabel">AppCookie</h1>
            {contents}
            <CookieSubmit setCookies={setCookies} />
        </div>
    );

    async function populateCookieData() {
        const response = await fetch('cookie');
        const data = await response.json();
        setCookies(data);
    }
}




export default AppCookie;