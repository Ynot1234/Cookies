import { useEffect, useState } from 'react';
import './App.css';
import CookieSubmit from './CookieSubmit'
import axios from 'axios'


const hl = "highlighted-input";

function AppCookie() {

    const [cookies, setCookies] = useState()
   
    const [changed, setChanged] = useState({
        name: {},
        desc: {},
        price: {},
    });
   
    
    const onChangeInput = (e,column,  id) => {
        const { name, value } = e.target
       
        setChanged((allChanged) => ({
            ...allChanged,
            [column]: {
                ...allChanged[column],
                [id]: true,
            },

        }));

        const editData = cookies.map((cookie) =>
            cookie.id === id && name ? { ...cookie, [name]: value } : cookie
        )
        setCookies(editData)
    }

    const handleClickUpdate = async (event) => {
       
        const id = event.cookie.id
      
        setChanged((allChanged) => ({
            "name": {
                ...allChanged["name"],
                [id]: false,
            },
            "desc": {
                ...allChanged["desc"],
                [id]: false,
            },
            "price": {
                ...allChanged["price"],
                [id]: false,
            }

        }));

        const response = await axios({
            method: 'post',
            url: '/cookie/UpdateCookie',
            headers: { 'Content-Type': 'application/json' },
            data: event.cookie,
            dataType: 'json'
        });

        setCookies(response.data)

    }





    const handleClickDelete = async (event) => {

        
      
     const response = await axios({
            method: 'post',
            url: '/cookie/DeleteCookie',
            headers: { 'Content-Type': 'application/json' },
            data: event.cookie,
            dataType: 'json'
        });

        setCookies(response.data)

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
                        <td>
                         <input
                            name="name"
                            value={cookie.name}
                            type="text"
                            onChange={(e) => onChangeInput(e, "name", cookie.id)}
                            placeholder="Type Name"
                            className={changed.name[cookie.id] ? hl : ""}/>
                        </td>
                        <td> <input
                            name="desc"
                            value={cookie.desc}
                            type="text"
                            onChange={(e) => onChangeInput(e,"desc", cookie.id)}
                            placeholder="Type Desc"
                            className={changed.desc[cookie.id] ? hl : ""} />
                        </td>
                         <td><input
                            name="price"
                            value={cookie.price}
                            type="text"
                            onChange={(e) => onChangeInput(e,"price", cookie.id)}
                            placeholder="Type Price"
                            className={changed.price[cookie.id] ? hl : ""}/>
                        </td>
                        <td>  <button type="submit" onClick={() => handleClickUpdate({ cookie })}>Update</button></td>
                        <td>  <button type="submit" onClick={() => handleClickDelete({ cookie })}>Delete</button></td>
                        
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