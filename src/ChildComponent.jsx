import {memo} from 'react'

export default memo(

    function ChildComponent(props){

        console.log("Child Component Nama Rendered")
    
        return (<>
    
            <h3>Hallo {props.name}</h3>

            <button onClick={props.aksi}>Ganti Nama</button>

    
        </>)
    }
    
) 