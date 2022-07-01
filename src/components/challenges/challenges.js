import React, {useState} from 'react';

import "./../App.css";

import image1 from "./../img-1.jpg";





function Challenge(props) {

    
    
console.log("Challenge rendered");
    return(
        <div >
       
       <h1 className='bg-secondary rounded-circle' style={{width:'5rem'}}>{props.number}</h1>
       
</div>
    )


}
export default Challenge