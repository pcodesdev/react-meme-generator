import React from 'react';

import "./App.css";

function Challenge(){
    let thingsArray = ['I love JS','HTML is used for hacking'];
    const itemsArray =thingsArray.map(arrayItem=> <h3> {arrayItem}</h3>)
    


    function addAryItems(){
   
   thingsArray.push(`I have never hacked ${thingsArray.length + 1}`)
   console.log(thingsArray);


}

    return(
        <div className="container">
        <div className="col m-3 ">
        
            <button onClick={addAryItems} className="btn btn-primary m-2">Click Me</button>
            {itemsArray}
        </div>
        </div>
    )


}
export default Challenge