import React from "react";
import Heading from "../../component/heading";
import './footer.css'
import SocialContainer from "../../component/SocialContainer/socialContainer";
import ResumeContainer from "../../component/ResumeContainer/resumeContainer";

const Footer = () => {
    return (
        <div id="skills" className="contactContainer">
            <Heading heading="Contact" />
            <div className="contactContainerContent">
                <div className="footerLinks">
                    <a href="https://github.com/NidhiU-24" target="_blank" rel="noopener noreferrer" className="link_footer">
                        <img src={'./svg/github.svg'} alt="Your SVG" className="footerSvg_icon" style={{ zIndex: 2 }} />
                        <span>Github</span>
                    </a>
                    <a href="https://www.linkedin.com/in/nidhi-uchil24/" target="_blank" rel="noopener noreferrer" className="link_footer"><img src={'./svg/linkedin.svg'} alt="Your SVG" className="footerSvg_icon" style={{ zIndex: 2 }} />
                        <span>LinkedIn</span></a>
                    <a href="mailto:nidhiuchil24@gmail.com?subject=Let's Connect&body=Hi Nidhi," className="link_footer"><img src={'./svg/email.svg'} alt="Your SVG" className="footerSvg_icon_email" style={{ zIndex: 2 }} />
                        <span>Email</span>
                    </a>
                </div>
                <div className="footerResume">
                    <a href="/NidhiUchil_Resume.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"><div className="resume_button-wrapper">
                            <div className="resume_custom-button">
                                <span>Resume</span>
                            </div>
                        </div></a>
                </div>
            </div>
        </div>
    )
}

export default Footer