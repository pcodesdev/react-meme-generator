import React, {useState} from "react"

// import boxes from "./boxes";

import './App.css'



import Star from './Star.js';
import jokesData from "./data/jokesData";

// import image1 from "./../img-1.jpg";

const boxes=[  {
    id: 1,
    on: true
},   
{
    id: 2,
    on: false
},   
{
    id: 3,
    on: true
},   
{
    id: 4,
    on: true
},   
{
    id: 5,
    on: false
},   
{
    id: 6,
    on: false
},]



export default function Challenge() {
    // const [isShown,setIsShown] = useState(false)
    // const boxColor=box.on=true


    // function toggleBox(id){
    //     setBox(prevBox=>{
           
    //         return prevBox.map((square)=>{
    //             return square.id===id?{...square,on:!square.on} : square;
    //         })
    //     })
    // }
   

   
    
    const jokesArray= jokesData.map((jokeItem)=>(
        <Star 
        key={jokeItem.id}
        
        setup={jokeItem.setup}
        punchline={jokeItem.punchline}
        // handleClick={toggleBox}
        
            
        />
        )
    )
   

    
    // function toggleFavorite() {
    //     setContact(prevContact => ({
    //         ...prevContact,
    //         isFavorite: !prevContact.isFavorite
    //     }))
    // }
    
    return (
        <main className="row row-cols-1 row-cols-md-3 g-4"> 
  {jokesArray}
  </main>

    )
}
