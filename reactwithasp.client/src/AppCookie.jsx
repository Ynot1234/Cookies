import { useEffect, useState } from 'react';
import './App.css';
import CookieSubmit from './CookieSubmit'


function AppCookie() {
    const [cookies, setCookies] = useState();

    const [postdata, setPostdata] = useState({})

    const handleInput = (event) => {
        setPostdata({ ...postdata, [event.target.name]: event.target.value })
    }


   useEffect(() => {
        populateCookieData();
    }, []);

    const contents = cookies === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. </em></p>
        : 
       <div>
                {cookies.map(cookie =>
                   
                    <form key={cookie.id}>
                        <input type="text" name="id" onChange={(event) => handleInput(event, cookie.id)}  value={cookie.id}></input>
                        <input type="text" name="name" onChange={(event) => handleInput(event, cookie.id)} value={cookie.name}></input>
                        <input type="text" name="name" onChange={(event) => handleInput(event, cookie.id)}></input>
                        <input type="text" name="desc" onChange={(event) => handleInput(event, cookie.id)} value={cookie.desc}></input>
                        <input type="text" name="price"  onChange={(event) => handleInput(event, cookie.id)}  value={cookie.price}></input>
                        <input type="submit"></input>
                   </form>
                )}
        </div>
       ;

  
    return (
        <div>
            <h1 id="tabelLabel">Cookies</h1>
            {contents}
            <CookieSubmit setCookies={setCookies} />
        </div>
    );

    async function populateCookieData() {
        const response = await fetch('cookie/GetAllCookies');
        const data = await response.json();
        setCookies(data);
    }
}




export default AppCookie;