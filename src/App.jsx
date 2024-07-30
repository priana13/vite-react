
import { useCallback, useState } from 'react';
import ChildComponent from './ChildComponent';
import Header from './Header'

import MenuResto from './MenuResto'
import Mood from './Mood';


function App() {

  const [name, setName] = useState("Priana");

  const [lokasi, setLokasi] = useState("Bogor");

  const handlerName = useCallback(
    () => {

      if(name == 'Priana'){
  
        setName("Jahtra");
  
      } else{
  
        setName("Priana");
      }
      
    },
    [name] // hanya jika name berubah maka akan di render ulang
  ) 

  const  handlerLokasi = () => {

    console.log('render lokasi berubah')

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

     <ChildComponent name={name} aksi={handlerName} />
    
     <p>Lokasi : {lokasi}</p>     
     <br />
     <button onClick={() => handlerLokasi()}>Ganti Lokasi</button>


    </>
  )
}

export default App
