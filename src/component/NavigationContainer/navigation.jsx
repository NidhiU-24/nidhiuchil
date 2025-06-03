import React from "react";
import "./navigation.css"

const Navigation = ({scrollTo}) =>{
    return(
        <div className="navigationConatiner">
            <div className="navTitleContainer">
                <h2 className="navTitle" onClick={()=>scrollTo("home")}>Home</h2>
                <h3 className="navSubTitle">Back to home page.</h3>
            </div>

            <div className="navTitleContainer">
                <h2 className="navTitle" onClick={()=>scrollTo("about")}>About Me</h2>
                <h3 className="navSubTitle">Get to know who I am and what drives me.</h3>
            </div>

            <div className="navTitleContainer">
                <h2 className="navTitle" onClick={()=>scrollTo("experience")}>Experience</h2>
                <h3 className="navSubTitle">Explore my professional milestones and growth.</h3>
            </div>

            <div className="navTitleContainer">
                <h2 className="navTitle" onClick={()=>scrollTo("projects")}>Projects</h2>
                <h3 className="navSubTitle">See how I turn ideas into impact.</h3>
            </div>

            <div className="navTitleContainer">
                <h2 className="navTitle" onClick={()=>scrollTo("skills")}>Skills</h2>
                <h3 className="navSubTitle">Discover the tools I master to build solutions.</h3>
            </div>


        </div>
    )
}

export default Navigation