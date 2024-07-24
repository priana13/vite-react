import { useState } from "react";

function Button(){
    
    const [counter , setCounter] = useState(0);

    let newCounter = 0;

    function clickHandler(nama){
         
        newCounter = counter + 1;
        setCounter(newCounter);

        console.log('Saya di klik ' + newCounter);
    }

    return (
        <button onClick={()=> clickHandler('Priana')}>Beli ({counter})</button>
    )
}

export default Button