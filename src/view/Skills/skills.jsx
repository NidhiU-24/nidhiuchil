import React, { useEffect, useState } from "react";
import "./skills.css"
import Heading from "../../component/heading";

const skills = {
    languageLibrary: [{ name: 'Python', path: '/svg/python.svg' }, { name: 'R', path: '/svg/R.svg' }, { name: 'MySQL', path: '/svg/mysql.svg' }, { name: 'PostgreSQL', path: '/svg/postgresql.svg' }, { name: 'SQLite', path: '/svg/sqlite.svg' },  { name: 'Pandas', path: '/svg/pandas.svg' }, { name: 'NumPy', path: '/svg/NumPy.svg' }, { name: 'Scikit-learn', path: '/svg/scikit-learn.svg' }, { name: 'Statsmodels', path: '/svg/statsmodels.svg' }],
    dataVisualization: [{ name: 'Power BI', path: '/svg/power-bi-icon.svg' }, { name: 'Tableau', path: '/svg/tableau.svg' }, { name: 'Matplotlib', path: '/svg/Matplotlib.svg' }, { name: 'Seaborn', path: '/svg/seaborn.svg' }, { name: 'Ploty', path: '/svg/Ploty.svg' }, { name: 'ggplot2', path: '/svg/ggplot2.svg' }],
    dataManagement: [{ name: 'Alteryx', path: '/svg/Alteryx.svg' }, { name: 'Power Query', path: '/svg/power-bi-icon.svg' }, { name: 'Excel', path: '/svg/microsoft-excel-icon.svg' }, { name: 'MongoDB', path: '/svg/mongodb.svg' }],
    workflowManagement: [{ name: 'Jira', path: '/svg/Jira.svg' }, { name: 'Trello', path: '/svg/Trello.svg' }, { name: 'Service Now', path: '/svg/service_now.svg' }, { name: 'Share Point', path: '/svg/sharepoint-icon.svg' }]
}


const Skills = () => {
    const [current, setCurrent] = useState("all")
    const [data, setData] = useState([])
    const [isAnimating, setIsAnimating] = useState(false);
    useEffect(() => {
        filterData("all")
    }, [])

    const toggleContent = (val) => {
        setIsAnimating(true); 
        setTimeout(() => {
            setCurrent(val);
            filterData(val);
            setIsAnimating(false); 
        }, 300);
    }

    const filterData = (val) => {
        switch (val) {
            case "languageLibrary":
                setData(skills[val])

                break;
            case "dataVisualization":
                setData(skills[val])
                break;
            case "dataManagement":
                setData(skills[val])
                break;
            case "workflowManagement":
                setData(skills[val])
                break;
            default:
                let skillArr = [...Object.values(skills).flat()]
                setData(skillArr)
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
                        data.map((el, index) => (
                            <div className="skills" key={index}>
                                <img src={el.path} className="skills_img" />
                                <span className="skillsImg_text">{el.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills