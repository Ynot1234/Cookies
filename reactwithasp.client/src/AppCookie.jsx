import { useEffect, useState } from 'react';
import './App.css';
import CookieSubmit from './CookieSubmit'


function AppCookie() {
    const [cookies, setCookies] = useState();

    

    const onChangeInput = (e, id) => {
        const { name, value } = e.target
       
      
        const editData = cookies.map((cookie) =>
            cookie.id === id && name ? { ...cookie, [name]: value } : cookie
        )

        setCookies(editData)
    }


   useEffect(() => {
        populateCookieData();
    }, []);

    const contents = cookies === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. </em></p>
        : 
        <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Desc</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {cookies.map(cookie =>
                    <tr key={cookie.id}>
                        <td>{cookie.id}</td>
                        <td>{cookie.date}</td>
                        <td><input
                            name="name"
                            value={cookie.name}
                            type="text"
                            onChange={(e) => onChangeInput(e, cookie.id)}
                            placeholder="Type Name" />
                        </td>
                        <td><input
                            name="desc"
                            value={cookie.desc}
                            type="text"
                            onChange={(e) => onChangeInput(e, cookie.id)}
                            placeholder="Type Desc" /></td>
                        <td><input
                            name="price"
                            value={cookie.price}
                            type="text"
                            onChange={(e) => onChangeInput(e, cookie.id)}
                            placeholder="Type Price" /></td>
                        <td>  <button type="submit">Update</button></td>

                    </tr>
                )}
            </tbody>
        </table>;



  
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