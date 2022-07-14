import React, {useState ,useEffect} from "react"



export default function WindowTracker() {

    const [windowWidth,setWindowWidth]= useState(window.innerWidth)

    useEffect(() => {
        function watchWidth(){
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWidth)

        return function(){
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    return (
        <h1>Window width: {windowWidth}</h1>
    )
}