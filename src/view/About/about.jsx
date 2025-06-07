import React from "react";
import './about.css'
import Heading from "../../component/heading";

const About = ({data}) => {
    return (
        <div id="about" className="aboutContainer">
            <div className="headerContainer">
                <Heading heading = "About Me"/>
            </div>
            <div className="aboutInfoContainer">
                <div className="imageContainer">
                    <div
                        className="imageBorder"
                    >
                        <img
                            src="/assets/nidhi.jpeg"
                            className="nidhiImage"
                        />
                    </div>
                </div>
                <div className="aboutText_Container">
                    <div className="aboutTexts">
                        {data.bullets.map((item, index)=>(
                            <div className="bulletPoint" key={index}>
                            <span>{item.icon}</span>
                            <p>{item.text}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About