import { useEffect, useState } from "react";

import "./Button.css";

function Button(props){
    
    const [counter , setCounter] = useState(0);

    let newCounter = 0;

    function clickHandler(nama){
         
        newCounter = counter + 1;
        setCounter(newCounter);

        console.log("Pesan Rendered");
    }

    useEffect(()=> {
        // console.log(`Jumlah Like: ${counter}`)
    });

    return (
        <button className="tombol" onClick={()=> clickHandler('Priana')}>{props.label} ({counter})</button>
    )
}

export default Button