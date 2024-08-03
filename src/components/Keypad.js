// Code Keypad Component Here
import React from "react";


function Keypad (){
    // Even handler that listens for change
    function handleChange(){
        console.log('Entering password...')

    }
    return (
        <div>
            <input  type="password" onChange={handleChange}></input>

        </div>
    )
}

export default Keypad;