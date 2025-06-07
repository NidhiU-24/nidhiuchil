import React, { useEffect, useState } from "react";
import "./skills.css"
import Heading from "../../component/heading";


const Skills = ({data}) => {
    const [current, setCurrent] = useState("all")
    const [filteredData, setFilteredData] = useState([])
    const [isAnimating, setIsAnimating] = useState(false);
    const [skillData, setSkillData] = useState({})

    useEffect(() => {
        filterData("all")
        setSkillData(data)
    }, [])

    const toggleContent = (val) => {
        setIsAnimating(true); 
        setTimeout(() => {
            setCurrent(val);
            filterData(val);
            setIsAnimating(false); 
        }, 300);
    }

    const filterData = (val, skillArray=skillData[val]?skillData[val]: data) => {
        switch (val) {
            case "languageLibrary":
                setFilteredData(skillArray)

                break;
            case "dataVisualization":
                setFilteredData(skillArray)
                break;
            case "dataManagement":
                setFilteredData(skillArray)
                break;
            case "workflowManagement":
                setFilteredData(skillArray)
                break;
            default:
                let skillArr = [...Object.values(skillArray).flat()]
                setFilteredData(skillArr)
        }
    }

    return (
        <div id="skills" className="skillsContainer">
            <div style={{ height: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Heading heading="Skills" />
            </div>
            <div className="skillsContent">
                <div className="skillsContentHeader">
                    <span onClick={() => toggleContent('all')} className={`skillTitle ${current == "all"? "skillsTitleActive" :""}`}>All</span>
                    <span onClick={() => toggleContent('languageLibrary')} className={`skillTitle ${current == "languageLibrary"? "skillsTitleActive" :""}`}>Languages & Libraries</span>
                    <span onClick={() => toggleContent('dataVisualization')} className={`skillTitle ${current == "dataVisualization"? "skillsTitleActive" :""}`}>Data Visualization</span>
                    <span onClick={() => toggleContent('dataManagement')} className={`skillTitle ${current == "dataManagement"? "skillsTitleActive" :""}`}>Data Management & ETL</span>
                    <span onClick={() => toggleContent('workflowManagement')} className={`skillTitle ${current == "workflowManagement"? "skillsTitleActive" :""}`}>Project & Workflow Management</span>
                </div>
                <div className={`skillsContentHolder ${isAnimating ? 'fade-out' : ''}`}>
                    {
                        filteredData.map((el, index) => (
                            <div className="skills" key={index}>
                                <img src={el.path} className="skills_img" />
                                <span className="skillsImg_text">{el.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

        // <></>
    )
}

export default Skills