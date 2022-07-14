import React, {useState,useEffect} from "react"

// import boxes from "./boxes";

import './App.css'



import Star from './Star.js';
import jokesData from "../data/jokesData";

// import image1 from "./../img-1.jpg";

// const boxes=[  {
//     id: 1,
//     on: true
// },   
// {
//     id: 2,
//     on: false
// },   
// {
//     id: 3,
//     on: true
// },   
// {
//     id: 4,
//     on: true
// },   
// {
//     id: 5,
//     on: false
// },   
// {
//     id: 6,
//     on: false
// },]



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
   

   
    
    // const jokesArray= jokesData.map((jokeItem)=>(
    //     <Star 
    //     key={jokeItem.id}
        
    //     setup={jokeItem.setup}
    //     punchline={jokeItem.punchline}
    //     // handleClick={toggleBox}
        
            
    //     />
    //     )
    // )
   

    
    // function toggleFavorite() {
    //     setContact(prevContact => ({
    //         ...prevContact,
    //         isFavorite: !prevContact.isFavorite
    //     }))
    // }

    // ? State objects
    // const [formData,setFormData]= useState({
    //     firstName:"",
    //     lastName:"",
    //     email:"",
    //     comments:"",
    //     isFriendly:false,
    //     employment:"",
    //     favColor:"",
    
    // }
    // )

   

    // function handleChange(event) {
    //     const {name,value,type,checked}=event.target
    //     setFormData(prevFormData=>{
    //         return{
    //             ...prevFormData,
    //             [name] : type==="checkbox" ?checked : value
    //         }
    //     })
    // }

    // function handleSubmit(event) {
    //     event.preventDefault()
    //     console.log(formData);
    // }

    const [data,setData]= useState({})
    const [count,setCount]= useState(1)

    useEffect(() => {
        // console.log("Effect function called");
        fetch(`https://swapi.dev/api/people/${count+1}`).then(res=>res.json()).then(data=>setData(data))
    },[count]
    // use a dependency array to control whether react should rerun
    )


    

    
    return (
        // & Fetching data from an API endpoint
        // anything that is outside of the react scope is considered a side-effect
        <div>
        <p>The count is {count}</p>
        <button onClick={()=>setCount(count+1)}>Get the next character</button>
            <pre>{JSON.stringify(data, null, 2)}</pre>

        </div>
        // & React Form
    // <form onSubmit={handleSubmit}>
    // <div className="m-3">
    //     <input type="text" placeholder="First Name" value={formData.firstName}    name="firstName"  onChange={handleChange} />
    //     </div>
    //     <div className="m-3">
    //     <input type="text" placeholder="Last Name" value={formData.lastName}       name="lastName"  onChange={handleChange} />
    //     </div>
    //     <div className="m-3">
    //     <input type="email" placeholder="Email" name="email" 
    //     value={formData.email}  onChange={handleChange} />
    //     </div>
    //     <div className="m-3">
    //     <textarea name="comments"
    //     placeholder="Write your comments here...."
    //     value={formData.comments}
    //         onChange={handleChange}
    //     />

    //     </div>
    //     <div className="m-3">
    //     <input type="checkbox"  id="isFriendly" 
    //     checked={formData.isFriendly} name="isFriendly" onChange={handleChange} />
    //     <label htmlFor="isFriendly">Would you like to receive promotional emails?</label>
    //     </div>
    //     <div className="m-3">
    //         <fieldset className="d-grid">
    //             <legend>Current Employment Status</legend>
    //             <input type="radio" id="unemployed" name="employment" value="unemployed"
    //                 onChange={handleChange} checked={formData.employment==="unemployed"}
    //             />
    //             <label htmlFor="unemployed">Unemployed</label>
    //             <input type="radio" id="part-time" name="employment" value="part-time"
    //                 onChange={handleChange} checked={formData.employment==="part-time"}
    //             />
    //             <label htmlFor="part-time">Part Time</label>
    //             <input type="radio" id="full-time" name="employment" value="full-time"
    //                 onChange={handleChange} checked={formData.employment==="full-time"}
    //             />
    //             <label htmlFor="full-time">Full Time</label>
    //         </fieldset>
    //     </div>
    //     <div>
    //         <label htmlFor="best-color">Select Favorite Color</label>
    //         <select name="favColor" id="best-color" onChange={handleChange}
    //         value={formData.favColor}
    //         >
    //         <option value="">--Select--</option>
    //             <option value="red">Red</option>
    //             <option value="orange">Orange</option>
    //             <option value="maroon">Maroon</option>
    //             <option value="purple">Purple</option>
    //             <option value="white">White</option>
    //         </select>
    //         <br />
    //         <button>Submit</button>
    //     </div>
    // </form>
    

    )
}
