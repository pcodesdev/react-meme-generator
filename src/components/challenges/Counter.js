import React, {useState} from 'react';
import { FaPlus,FaMinus} from 'react-icons/fa';

import Challenge from './challenges'

function Counter(){
    const [count,setCount]= useState(0)

    function addition(){
        setCount(prevCount=>prevCount+1)
    }
    function subtract(){
        setCount(prevCount=>prevCount-1)
    }
    return(
        <div className='d-flex'>
        <button onClick={addition}><FaPlus/></button>
            <Challenge number={count}/>
            <button onClick={subtract}><FaMinus/></button>
        </div>
    )
}
export default Counter