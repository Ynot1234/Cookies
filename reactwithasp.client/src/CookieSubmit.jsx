import { useState } from 'react';
import axios from 'axios'


//eslint-disable-next-line react/prop-types
function CookieSubmit({ setCookies }) {

    const [postdata, setPostdata] = useState({
        name: '',
        desc:''
    })

    const handleInput = (event) => {
        setPostdata({ ...postdata, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response =    await axios({
            method: 'post',
            url: '/cookie',
            headers: { 'Content-Type': 'application/json' },
            data: postdata,
            dataType: 'json'
        });

        setCookies(response.data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name"  onChange={handleInput} />
            <input type="text" name="desc" placeholder="Desc" onChange={handleInput} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default CookieSubmit;