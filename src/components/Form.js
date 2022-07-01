import React,{useState} from 'react';

import { FaImage } from 'react-icons/fa';

import memesData from './data/memesData';

// import meme1 from './meme-1.png';

function Form(){

    const [meme,setMeme] =useState({
        topText:'',
        bottomText:'',
        randomImage:'http://i.imgflip.com/1bij.jpg',
    })

    const [allMemeImages,setAllMemeImages] = useState(memesData)

    function getMemeImage(){
        const dataArray =allMemeImages.data.memes
  const randomMeme= dataArray[Math.floor(Math.random() * dataArray.length)];
  const {url}= randomMeme
  setMeme(prevMeme=>({...prevMeme,
    randomImage: url
}))
 
    }
    return(
    <div className="container">

<input type="text" className="form-input" placeholder='Shut up' ></input>
<input type="text" className="form-input" placeholder='and take my money'></input>
<div className="d-grid">
 <button className='btn btn-info btn-meme' onClick={getMemeImage}>Get a new meme image <FaImage/></button>
 <div  className="d-img" >
    <img className="" style={{width: '100%',}}  src={meme.randomImage} alt=""></img>
</div>
</div>

        </div>
    )
}

export default Form