/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios'
import Validation from './helper/Validation';


//eslint-disable-next-line react/prop-types
function CookieSubmit({ setCookies, setErrorMessage, ErrorMessage }) {

    const [postdata, setPostdata] = useState({
        name: '',
        desc: '',
        price: ''
    })


    const handleInput = (event) => {

        event.preventDefault()
        setPostdata({ ...postdata, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {

        event.preventDefault();
        const msg = Validation(postdata)
        setErrorMessage(msg)
        
        if (msg.length === 0)
        {
            const response = await axios({
                method: 'post',
                url: '/cookie/PostCookie',
                headers: { 'Content-Type': 'application/json' },
                data: postdata,
                dataType: 'json'
            });

            setCookies(response.data)

            setPostdata({
                name: '',
                desc: '',
                price: ''
            });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={postdata.name}  onChange={handleInput} />
            <input type="text" name="desc" placeholder="Desc" value={postdata.desc}  onChange={handleInput} />
            <input type="text" name="price" placeholder="Price" value={postdata.price}  onChange={handleInput}  />
            <button type="submit" name="submit">Submit</button>
            <br></br>
            <div className= "error-message">{ErrorMessage}</div>

            
        </form>
    );
}

export default CookieSubmit;