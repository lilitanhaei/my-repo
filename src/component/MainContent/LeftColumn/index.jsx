import React from "react";
import mainImage from "../../../theme/Images/website-design-your-business_2.webp";

function LeftColumn() {
    return(
        <div className="leftColumn">
                <div className="headerButtons">
                    <div className="saveButton">
                        <i className="fa fab fa-pinterest"></i>
                        <span>Save</span>
                    </div>
                    <div className="copyLinkButton">
                        <i className="fab fa-pinterest"></i>
                        <span>Copy link</span>
                    </div>
                </div>
                <div>
                    <img className="mainImage" src={mainImage}/>
                </div>
            </div>
    )
}

export default LeftColumn;