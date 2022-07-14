import React, {useState, useEffect} from "react"
import WindowTracker from './Star'

export default function App() {
    /**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */

    const [show,setShow]=useState(true)

    function toggleShow(){
        setShow(prevState=>!prevState)
    }
    
    return (
        <div className="container">
            <button className="btn btn-secondary" onClick={toggleShow}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
        </div>
    )
}