//import { useEffect, useState } from 'react';
import './App.css';



const SubmitCookie = () => {

    async function onCookieSubmitClick () {
        const response = await fetch('cookie', {
            method: "PUT",
            body: JSON.stringify()
        });
        const data = await response.json();
    }


    return (
        <div className="col-5">
            <input
                id="cookieDesc"
                className="h-100"
                type="text"
                //value={newBid.bidder}
                //onChange={(e) => setNewBid({ ...newBid, bidder: e.target.value })}
                placeholder="Cookie"
            ></input>

            <div className="col-2">
                <button className="btn btn-primary"
                    onClick={onCookieSubmitClick}>
                    Add Cookie
                </button>
            </div>
        </div>
    );

 

};


export default SubmitCookie;