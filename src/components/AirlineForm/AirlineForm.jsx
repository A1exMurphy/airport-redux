import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


function AirlineForm() {
    let [airlineToAdd, setAirlineToAdd] = useState({ name: '' });
    const dispatchEvent = useDispatch();
    
    const addAirline = (e) => {
        e.preventDefault();
        
        dispatchEvent({
            type: "CREATE_AIRLINE",
            payload: airlineToAdd
        })
        setAirlineToAdd('')
    }
    return(
        <div>
            <form onSubmit={addAirline}>
                <input
                value={
                    airlineToAdd
                }
                onChange={(e) => setAirlineToAdd(e.target.value)}
                />
                     <button>Add Airline</button>
            </form>
        </div>
    )
}

export default AirlineForm;