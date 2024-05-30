import { useState } from 'react';
import axios from 'axios'


//eslint-disable-next-line react/prop-types
function CookieSubmit({ setCookies }) {

    const [post, setPost] = useState({
        name: '',
        desc:''
    })

    const handleInput = (event) => {
        setPost({ ...post, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response =    await axios({
            method: 'post',
            url: '/cookie',
            headers: { 'Content-Type': 'application/json' },
            data: post,
            dataType: 'json'
        });

        setCookies(response.data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name"  onChange={handleInput} />
            <input type="text" name="desc"  onChange={handleInput} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default CookieSubmit;