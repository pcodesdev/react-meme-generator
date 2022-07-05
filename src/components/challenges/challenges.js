import React, {useState} from "react"

// import boxes from "./boxes";

import './App.css'



import Star from './Star.js';

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
    const [box, setBox] = useState(boxes)
    // const boxColor=box.on=true


    function toggleBox(id){
        setBox(prevBox=>{
            const newBoxes = []
            for(let i=0; i<prevBox.length; i++){
               const currentBox=prevBox[i]
               if(currentBox.id===id){
                const updatedBox ={
                    ...currentBox,
                    on:!currentBox.on,
                } 
                newBoxes.push(updatedBox)
               }else{
                newBoxes.push(currentBox)
               }

            }
            return newBoxes
        })
    }
   

   
    
    const boxesArray= box.map((boxItem)=>(
        <Star 
        key={boxItem.id}
        id={boxItem.id}
        on={boxItem.on}
        handleClick={toggleBox}
        
            
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
  {boxesArray}
  </main>

    )
}
