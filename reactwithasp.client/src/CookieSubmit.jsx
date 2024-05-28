import { useState } from 'react';
import axios from 'axios'


async function SendCookieData(el) {
    const response = await fetch('cookie',
        {
          method: "GET",
            body: JSON.stringify(el),
            headers: {
             "Content-Type": "application/json",
            },
          
        });
    const NewCookieTable = await response.json();
    return NewCookieTable;
}




//eslint-disable-next-line react/prop-types
function CookieSubmit({ setCookies }) {
    const [Name, setName] = useState('');
    const [Desc, setDesc] = useState('');

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleDesc = (event) => {
        setDesc(event.target.value);
    }

    const handleSubmit =async (event) => {
        event.preventDefault();
        const data = await  SendCookieData({ Name, Desc });
        setCookies(data)
        return data;

    }

    return (
        <form onSubmit={handleSubmit}>
            <input id="Name" label="Name" type="text" value={Name} onChange={handleName} />
            <input id="Desc" label="Desc" type="text" value={Desc} onChange={handleDesc} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default CookieSubmit;