import React,{useState} from 'react';

import { FaImage } from 'react-icons/fa';

import memesData from './data/memesData';

// import meme1 from './meme-1.png';

function Form(){

    const memeImage=useState('')
    const [image,setImage] = memeImage

    function getMemeImage(){
        const dataArray =memesData.data.memes
  const randomMeme= dataArray[Math.floor(Math.random() * dataArray.length)];
  const {url}=randomMeme
  setImage(url)
 
    }
    return(
    <div className="container">

<input type="text" className="form-input" placeholder='Shut up' ></input>
<input type="text" className="form-input" placeholder='and take my money'></input>
<div className="d-grid">
 <button className='btn btn-info btn-meme' onClick={getMemeImage}>Get a new meme image <FaImage/></button>
 <div  className="d-img" >
    <img className="" style={{width: '100%',}}  src={image} alt=""></img>
</div>
</div>

        </div>
    )
}

export default Form