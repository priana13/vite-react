
import { useState } from 'react';
import ChildComponent from './ChildComponent';
import Header from './Header'

import MenuResto from './MenuResto'
import Mood from './Mood';


function App() {

  const [name, setName] = useState("Priana");

  const [lokasi, setLokasi] = useState("Bogor");

  function handlerName(){

    if(name == 'Priana'){

      setName("Jahtra");

    } else{

      setName("Priana");
    }
    
  }

  function handlerLokasi(){

    if(lokasi == 'Bogor'){

      setLokasi("Jakarta");

    } else{

      setLokasi("Bogor");
    }
    
  }
  

  return (
    <>
     
     <Header />

     <Mood hari="Senin" />
     
     <MenuResto />

     <ChildComponent name={name} />
    
     <p>Lokasi : {lokasi}</p>

     <button onClick={() => handlerName()}>Ganti Nama</button>
     
     <br />
     <button onClick={() => handlerLokasi()}>Ganti Lokasi</button>


    </>
  )
}

export default App
