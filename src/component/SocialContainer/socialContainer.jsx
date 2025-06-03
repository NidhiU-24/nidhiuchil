import React from "react";
import './socialContainer.css'

const SocialContainer = () =>{

    return(
        <div className="button-wrapper">
        <div className="custom-button">
          <a href="https://github.com/NidhiU-24" target="_blank" rel="noopener noreferrer"><img src={'./svg/github.svg'} alt="Your SVG" className="svg_icon" style={{zIndex: 2}}/></a>
          <a href="https://www.linkedin.com/in/nidhi-uchil24/" target="_blank" rel="noopener noreferrer"><img src={'./svg/linkedin.svg'} alt="Your SVG" className="svg_icon" style={{zIndex: 2}}/></a>
          <a href="mailto:nidhiuchil24@gmail.com?subject=Let's Connect&body=Hi Nidhi,"><img src={'./svg/email.svg'} alt="Your SVG" className="svg_icon_email" style={{zIndex: 2}}/></a>
        </div>
      </div>
    )
}

export default SocialContainer