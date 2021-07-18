import { useState } from "react";
import "./exp.scss"

export default function Exp() {

    const [slide, setSlide] = useState(0);
    const expData = [
         {
            id: "1",
            hc: "cmf",
            icon: "assets/cmf.png",
            title: "Financial Market Council",
            desc: "Migrate the stock market monitoring application to a web application.",
            img: "assets/stock.jpg",
        },
        {
            id: "2",
            hc: "tunisair",
            icon: "assets/tunisair.png",
            title: "Tunisair",
            desc: "Study and set up a web application that process the anomalies in the prices of airline tickets.",
            img: "assets/tunisair-t.png",
        },
        {
            id: "3",
            icon: "assets/tt.png",
            hc: "tt",
            title: "Tunisie Telecom ",
            desc: "Development of an application for managing customer service and complaints.",
            img: "assets/ttt.png",
        }, 
    ];

    const handleClick = (side) => {
         if(side === "left"){
            if (slide > 0) {
                setSlide(slide - 1);
            }else{
                setSlide(2);
            }
        }
        else if(side === "right"){
            if (slide < (expData.length - 1)) {
                setSlide(slide + 1);
            }else{
                setSlide(0);
            }
        }
    }

    return (
        <div className="exp" id="exp">
            <div className="slider" style={{transform: `translateX(-${slide * 100}vw)` }}>
                {expData.map((d) => ( 
                <div className="container">
                    <div className="item">
                        <div className="p1">
                            <div className="p1Container">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2 className={d.hc}>{d.title}</h2>
                                <p>{d.desc}</p>
                            </div>
                        </div>
                        <div className="p2">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                    
                </div>
                ))} 
            </div>
            <img src="assets/arrow-100.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
            <img src="assets/arrow-100.png" className="arrow right" alt="" onClick={() => handleClick("right")} />
        </div>
    )
}
