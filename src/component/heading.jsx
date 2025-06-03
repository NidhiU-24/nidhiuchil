import React from "react";
import './heading.css';

const Heading = (props) => {
    return (
        <div className="heading">

            <h2 className="headText">
                {props.heading}
            </h2>
            <div className="headingUnder">

            </div>
        </div>
    )
}

export default Heading