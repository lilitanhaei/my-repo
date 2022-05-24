import React from "react";
import AbsoluteIcons from "./AbsoluteIcons";

function TemplateItem({image, title, avatar, name}) {
    return(
        <div style={{backgroundImage: `url(${image})`}} className="templateItem">
            <div className="absoluteDiv">
                <AbsoluteIcons/>
                <a href="#" className="absoluteTexts">
                    <span>{title}</span>
                    <div className="avatarAndName">
                        <img src={avatar} className="avatar"/>
                        <span>{name}</span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default TemplateItem;