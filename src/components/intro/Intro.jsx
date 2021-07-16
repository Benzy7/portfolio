import "./intro.scss"
import { init } from 'ityped'
import { useEffect , useRef } from "react"

export default function Intro() {
    
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
             showCursor: true,
             backDelay: 1500,
             backSpeed: 55,
              strings: ['Web Developer', 'Backend Developer', 'Frontend Developer'] 
            })    
        }, [])
    return (
        <div className="intro" id="intro">
            <div className="p1">
                <div className="picContainer">
                    <img src="assets/kbnz.png" alt="" />
                </div>
            </div>
            <div className="p2">
                <div className="infoBox">
                    <h1></h1><h1></h1>
                    <h2>Hi there, I'm</h2>
                    <h1>Khoubaib Benzayed</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#skills">
                    <img src="assets/expand-arrow-30.png" alt="" />
                </a>
            </div>
        </div>
    )
}
