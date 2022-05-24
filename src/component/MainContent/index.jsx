import React from "react";
import LeftColumn from "./LeftColumn";
import RightItems from "./RightItems";

function MainContent() {
    return(
        <div className="mainContent">
            <LeftColumn/>
            <RightItems/>
        </div>
    )
}

export default MainContent;