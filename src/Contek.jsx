import { useContext, useState } from "react";

import { createContext } from "react";

const Context = createContext();


export default function Contek(){

    const [name, setName] = useState("Priana Saputra");

    return (<>  
    

        <Context.Provider value={{ name , setName , umur : 32 }}> 

            <Child1 />

        </Context.Provider>   

    
    </>)


    
}

function Child1(){

    return <Child2 ></Child2>
    
}

function Child2(){

    return <Child3 ></Child3>
    
}


function Child3(){

    const data = useContext(Context);

    const gantiNama = () => {

        console.log('nama akan diganti');

        data.setName("Jahtra S")
    }

    return (<>
    
        <p>Hallo <strong>{data.name}</strong>  , umur <strong>{data.umur}</strong>  dari Child 3</p>

        <button onClick={gantiNama }>Ganti Nama</button>
    </>)

    
}