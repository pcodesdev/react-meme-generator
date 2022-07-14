import React,{useState,useEffect} from 'react';

import { FaImage } from 'react-icons/fa';

import memesData from './data/memesData';
import './App.css';

// import meme1 from './meme-1.png';

function Form(){

    const [meme,setMeme] =useState({
        topText:'',
        bottomText:'',
        randomImage:'http://i.imgflip.com/1bij.jpg',
    })

    const [allMemes,setAllMemes]= useState([])

    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])
    
    // const [allMemeImages,setAllMemeImages] = useState(memesData)
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name,value,type,checked}=event.target
        setMeme(prevFormData=>{
            return{
                ...prevFormData,
                [name] : type==="checkbox" ?checked : value
            }
        })
    }

    return(
    <div className="container">

<input type="text" className="form-input" placeholder='Shut up' value={meme.topText} name="topText" onChange={handleChange} ></input>
<input type="text" className="form-input" placeholder='and take my money' value={meme.bottomText} name="bottomText" onChange={handleChange} ></input>
<div className="d-grid">
 <button className='btn btn-info btn-meme' onClick={getMemeImage}>Get a new meme image <FaImage/></button>
 <div  className="d-img" >
    <img className="" style={{width: '100%',}}  src={meme.randomImage} alt=""></img>
    <h2 className="meme--text top">{meme.topText}</h2>
    <h2 className="meme--text bottom">{meme.bottomText}</h2>
</div>
</div>

        </div>
    )
}

export default Form