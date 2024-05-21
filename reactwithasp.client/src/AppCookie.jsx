import { useEffect, useState } from 'react';
import './App.css';

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
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {cookies.map(cookie =>
                    <tr key={cookie.name}>
                        <td>{cookie.name}</td>
                       
                    </tr>
                )}
            </tbody>
        </table>;
   
    return (
        <div>
            <h1 id="tabelLabel">Cookie</h1>
           {/* <p>This component demonstrates fetching data from the server.</p>*/}
            {contents}
        </div>
    );

    async function populateCookieData() {
        const response = await fetch('cookie');
        const data = await response.json();
        setCookies(data);
    }
}

export default AppCookie;