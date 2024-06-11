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

        postdata.id = event.target.elements.hiddenValue.value;

        const response = await axios({
            method: 'post',
            url: '/cookie/UpdateCookie',
            headers: { 'Content-Type': 'application/json' },
            data: postdata,
            dataType: 'json'
        });

        setCookies(response.data)
    }
    //event.target.hiddenValue.value
    return (


        <form onSubmit={handleUpdate}>
            <br />  <strong>Update Record</strong>
            <br /><br /><input type="hidden" name="id" id="id" placeholder="Id" disabled={false} value="1" onSubmit={handleInput}></input><br />
            <input type="hidden" name="hiddenValue" value="4" />
            {/*<br /><br /><input type="text" name="id" placeholder="Id" onChange={handleInput} /><br />*/}
            <input type="text" name="name" placeholder="Name" disabled={false} onChange={handleInput} />
            <input type="text" name="desc" placeholder="Desc" disabled={false}  onChange={handleInput} />
            <input type="text" name="price" placeholder="Price" disabled={false} onChange={handleInput} />
            <button type="submit">Update</button>
      </form>




  );
}

export default UpdateCookie;