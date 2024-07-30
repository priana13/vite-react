import {memo} from 'react'

export default memo(
    
    function ChildComponent({name}){

        console.log("Child Component Rendered")
    
        return (<>
    
            <h3>Hallo {name}</h3>
    
        </>)
    }
    
) 