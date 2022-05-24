import React from "react";
import Follow from "./Follow";

function RightItems() {
    return(
        <div className="rightItems">
            <div  className="rightItemsLinks">
                <div className="addContainer"></div>
                <div style={{display:"flex"}}>
                    <a href="#" className="collectButton"><i className="fa fa-solid fa-folder"></i>collect</a>
                    <a href="#" className="rightItemsIcon"><i className="fa fa-solid fa-heart"></i></a>
                    <a href="#" className="rightItemsIcon"><i className="fa fa-solid fa-heart"></i></a>
                </div>
                <br/>
                <a href="#" className="downloadButton"><i className="fa fa-thin fa-download" />Download</a>
            </div>
            <div className="template">
                <div style={{display:"flex"}}>
                    <span>Template in PSD format</span>
                    <a href="#">How to edit?</a>
                </div>
                <div>
                    <h6>Freepik License</h6>
                    <br/>
                    <span>Free for personal and commercial purpose with attribution. </span>
                    <a href="#">More info</a>
                </div>
                <h6>Attribution is required</h6>
                <a href="#">How to attribute?</a>
            </div>
            <Follow/>
        </div>

    )
}

export default RightItems;