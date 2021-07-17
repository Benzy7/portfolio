import "./skills.scss"
import SkillsList from "../skillsList/SkillsList";
import { useState, useEffect } from "react";
import {featuredSkills, webSkills, mobileSkills, langSkills} from "../skillsList/skillsData"

export default function Skills() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web Development",
        },
        {
            id: "mobile",
            title: "Mobile Development",
        },
        {
            id: "languages",
            title: "Programming Languages",
        },
    ];
    
    useEffect(() => {

        switch (selected) {
            case "featured":
                setData(featuredSkills)
                break;
            case "web":
                setData(webSkills)
                break;
            case "mobile":
                setData(mobileSkills)
                break;
            case "languages":
                setData(langSkills)
                break;
        
            default:
                setData(featuredSkills)
                break;
        }

    }, [selected])

    return (
        <div className="skills" id="skills">
            <h1>Skills</h1>
            <ul>
                {list.map(item=>(
                    <SkillsList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                <div className="item">
                    <img src={d.img} alt=""/>
                    <h3>{d.title}</h3>
                </div>
                ))}
            </div>
        </div>
    )
}
