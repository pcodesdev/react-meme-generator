import React, {useState} from 'react';

// import { FaStarOfDavid,FaStarOfLife    } from 'react-icons/fa';

function Star(props){
    // console.log(props.id);
   

    // const [on,setOn]= useState(props.on)
    const bgColor =props.on?'#118ab2':'#5F6A62';

    // function setToggle(){
    //     setOn(prevOn=>!prevOn)
    // }
    return(
        
        <div onClick={()=>props.handleClick(props.id)} className="card box d-grid border-primary m-1" style={{width:'18rem',backgroundColor:bgColor}} ></div>
       
    )
}
export default Star