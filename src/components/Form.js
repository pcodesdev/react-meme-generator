import React from 'react';

import { FaImage } from 'react-icons/fa';

import memesData from './data/memesData';

import meme1 from './meme-1.png';

function Form(){
    function getMemeImage(){
        const dataArray =memesData.data.memes
  const randomMeme= dataArray[Math.floor(Math.random() * dataArray.length)];
  const {url}=randomMeme
 console.log(url);
    }
    return(
    <div className="container">

<input type="text" className="form-input" placeholder='Shut up' ></input>
<input type="text" className="form-input" placeholder='and take my money'></input>
<div className="d-grid">
 <button className='btn btn-info btn-meme' onClick={getMemeImage}>Get a new meme image <FaImage/></button>
 <div>
    <img className="d-img"  src={meme1} alt=""></img>
</div>
</div>

        </div>
    )
}

export default Form