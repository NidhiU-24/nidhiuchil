import React, { useState } from "react";
import "./navigation.css"

const Navigation = ({ scrollTo }) => {
    const [isHover, setIsHover] = useState([false, false, false, false, false]);
    const handleMouseEnter = (index) => {
        setIsHover((prev) => {
            const hover = [...prev]
            hover[index] = true
            return hover
        });
    };

    const handleMouseLeave = (index) => {
        setIsHover((prev) => {
            const hover = [...prev]
            hover[index] = false
            return hover
        });
    };
    return (
        <div className="navigationConatiner">
            {console.log("Hello", isHover)}
            <div className="navTitleContainer">
                <h2 className="navTitle" onClick={() => scrollTo("home")} style={{ color: isHover?.[0] ? '#3d98ec' : '#0f1b61' }} onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={() => handleMouseLeave(0)}>Home</h2>
                <h3 className="navSubTitle">Back to home page.</h3>
            </div>

            <div className="navTitleContainer">
                <h2 className="navTitle" onClick={() => scrollTo("about")} style={{ color: isHover?.[1] ? '#54ce51' : '#0f1b61' }} onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={() => handleMouseLeave(1)}>About Me</h2>
                <h3 className="navSubTitle">Get to know who I am and what drives me.</h3>
            </div>

            <div className="navTitleContainer">
                <h2 className="navTitle" onClick={() => scrollTo("experience")} style={{ color: isHover?.[2] ? '#8d2bf4' : '#0f1b61' }} onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={() => handleMouseLeave(2)}>Experience</h2>
                <h3 className="navSubTitle">Explore my professional milestones and growth.</h3>
            </div>

            <div className="navTitleContainer">
                <h2 className="navTitle" onClick={() => scrollTo("projects")} style={{ color: isHover?.[3] ? '#f47f2b' : '#0f1b61' }} onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={() => handleMouseLeave(3)}>Projects</h2>
                <h3 className="navSubTitle">See how I turn ideas into impact.</h3>
            </div>

            <div className="navTitleContainer">
                <h2 className="navTitle" onClick={() => scrollTo("skills")} style={{ color: isHover?.[4] ? '#f42b2b' : '#0f1b61' }} onMouseEnter={() => handleMouseEnter(4)}
                    onMouseLeave={() => handleMouseLeave(4)}>Skills</h2>
                <h3 className="navSubTitle">Discover the tools I master to build solutions.</h3>
            </div>


        </div>
    )
}

export default Navigation