import React from "react";
import './about.css'
import Heading from "../../component/heading";

const About = () => {
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
                        <div className="bulletPoint">
                            <span>📊</span>
                            <p>I'm a data professional with a passion for uncovering insights hidden in numbers.</p>
                        </div>

                        <div className="bulletPoint">
                            <span>🧠</span>
                            <p>With experience in both data analysis and data science, I specialize in transforming raw, complex data into meaningful stories and actionable strategies.</p>
                        </div>

                        <div className="bulletPoint">
                            <span>🧹</span>
                            <p>From cleaning messy datasets to building predictive models, I enjoy the entire journey of data — from exploration to decision-making.</p>
                        </div>

                        <div className="bulletPoint">
                            <span>🚀</span>
                            <p>Whether it's optimizing business processes, solving real-world problems, or discovering patterns others miss, I aim to turn data into a powerful asset.</p>
                        </div>

                        <div className="bulletPoint">
                            <span>🛠️</span>
                            <p>My toolkit includes Python, SQL, and machine learning, along with data visualization tools like Tableau and Power BI.</p>
                        </div>

                        <div className="bulletPoint">
                            <span>💡</span>
                            <p>But more than tools, I bring curiosity, critical thinking, and a drive to make data work for people — not just dashboards.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About