import React, {useState} from 'react';

// import { FaStarOfDavid,FaStarOfLife    } from 'react-icons/fa';

function Star(props){
   

    const [isShown,setIsShown]= useState(false)
    const bgColor =props.on?'#118ab2':'#5F6A62';

    // function setToggle(){
    //     setOn(prevOn=>!prevOn)
    // }

    function toggleShown(){
        setIsShown(prevShown=>!prevShown)
       
    }
    return(
        
        <div>
        {props.setup && <h3>{props.setup}</h3>}
        {isShown && <p>{props.punchline}</p>}
        <button onClick={toggleShown} className='btn btn-warning'>{isShown==false?'Show Punchline':'Hide Punchline'  }</button>
        
        <hr />
    </div>
       
    )
}
export default Star