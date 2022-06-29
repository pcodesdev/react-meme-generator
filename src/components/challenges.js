import React from 'react';

import "./App.css";

function Challenge(){
    // function greetings(personName){
    //     const date=new Date();
    //     let hours=date.getHours();
    //     console.log(hours)
    //     if(hours>=4&&hours<12){
    //         console.log( `Good morning ${personName}`)
    //     }else if(hours>=12&&hours<17){
    //         console.log( `Good afternoon ${personName}`)
    //     }else if(hours>=17&&hours<20){
    //         console.log( `Good evening ${personName}`)
    //     }else
    //         console.log( `Good night ${personName}`)
        
    //  }
    // greetings("Peter")

    const results=React.useState("Yes")
    const [result, setResult]=results
    
    
    console.log(result);

    function handleClick(){
        return(
            setResult('No')
        )
    }

    return(
        <div className="container">
        <div onClick={handleClick} className="col m-3 ">
        
          <h1 className="bg-primary text-center rounded-circle p-5" style={{width:'10rem', height:'10rem'}}>
          {result}</h1>
            
        </div>
        </div>
    )


}
export default Challenge