import React, {useState} from 'react';

import "./App.css";

// import { FaPlus,FaMinus } from 'react-icons/fa';

function Challenge(){
  

    const [thingsArray,setThingsArray] =useState(["Thing 1", "Thing 2"]) 
    
    function addItem(){
        setThingsArray(prevThingsArray=>{
            return [...prevThingsArray,`Thing ${prevThingsArray.length+1}`]})
    }


    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    

    return(
        <div className="container">
        <div  className="col m-3 d-flex ">
       
      
      <div>
        <button onClick={addItem} className='btn btn-danger'>
            Add Items
        </button>
        {thingsElements}
      </div>
       
       </div>
        </div>
    )


}
export default Challenge