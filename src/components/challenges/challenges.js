import React, {useState} from "react"

// import boxes from "./boxes";

import './App.css'



// import Star from './Star.js';

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
    const boxColor=box.on?'#3d5885':'#0b1526'

    function toggleColor(){
        setBox(boxColor=>!boxColor)
    }

   
    
    const boxesArray= box.map((boxItem)=>(
        <div className="">
        <div onClick={toggleColor} className="card box d-grid border-primary m-1" style={{width:'18rem',}} key={boxItem.id}></div>
        </div>
        )
    )
    console.log(boxesArray);

    
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
