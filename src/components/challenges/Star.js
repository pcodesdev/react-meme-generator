import React from 'react';

import { FaStarOfDavid,FaStarOfLife    } from 'react-icons/fa';

function Star(props){
    let starIcon = props.isFilled ? <FaStarOfDavid/> : <FaStarOfLife/>
    return(
        <div>
            <h1 className="btn btn-info"
                        onClick={props.handleClick}>{starIcon}</h1>
        </div>
    )
}
export default Star