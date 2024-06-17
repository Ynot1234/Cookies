import { useState } from 'react';
import axios from 'axios'

//eslint-disable-next-line react/prop-types
function CookieSubmit({ setCookies }) {

    const [postdata, setPostdata] = useState({
        name: '',
        desc: '',
        price: ''
    })


    const [errorMessage, setErrorMessage] = useState('');
    
    const handleInput = (event) => {

        event.preventDefault()
        setPostdata({ ...postdata, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {

        event.preventDefault();
        const IsNotValidNum = Number.isNaN(Number(postdata.price.trim()))

        if (postdata.name.trim() === "") {
            setErrorMessage('Please enter a name');

        }
        else if (postdata.desc.trim() === "") {
            setErrorMessage('Please enter a desc');

        }
        else if (postdata.price.trim() === "" || IsNotValidNum) {
            setErrorMessage('Please enter a valid number');

        }
        else {

            setErrorMessage('');

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
            <button type="submit" name="submit"  >Submit</button>
            <br></br>
            <div className="error-message">{errorMessage}</div>
        </form>
    );
}

export default CookieSubmit;