import React from "react";
import './resumeContainer.css'

const ResumeContainer = () => {

  return (
    <a href="/NidhiUchil_Resume.pdf"
      download
      target="_blank"
      rel="noopener noreferrer"><div className="resume_button-wrapper">
        <div className="resume_custom-button">
          <span>Resume</span>
        </div>
      </div></a>
  )
}

export default ResumeContainer