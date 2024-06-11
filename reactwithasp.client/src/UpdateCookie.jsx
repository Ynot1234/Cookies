import { useState } from 'react';
import axios from 'axios'


//eslint-disable-next-line react/prop-types
function UpdateCookie({ setCookies }) {

    const [postdata, setPostdata] = useState({})

    const handleInput = (event) => {
        setPostdata({ ...postdata, [event.target.name]: event.target.value })
    }


    const handleUpdate = async (event) => {
        event.preventDefault();

        const response = await axios({
            method: 'post',
            url: '/cookie/UpdateCookie',
            headers: { 'Content-Type': 'application/json' },
            data: postdata,
            dataType: 'json'
        });

        setCookies(response.data)
    }

    return (


        <form onSubmit={handleUpdate}>
            <br />  <strong>Update Record</strong>
            <br /><br /><input type="text" name="id" placeholder="Id" onChange={handleInput} /><br />
            <input type="text" name="name" placeholder="Name" disabled={false}  onChange={handleInput} />
            <input type="text" name="desc" placeholder="Desc" disabled={false}  onChange={handleInput} />
            <input type="text" name="price" placeholder="Price" disabled={false} onChange={handleInput} />
            <button type="submit">Update</button>
      </form>




  );
}

export default UpdateCookie;