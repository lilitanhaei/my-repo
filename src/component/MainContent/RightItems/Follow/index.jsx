import React from "react";
import avatar from "../../../../theme/Images/avatar.jpg"

function Follow() {
    return(
        <div className="follow">
            <img src={avatar} className="avatar"/>
            <div>
                <a href="#" className="name">denamorado</a>
                <span className="numberOfImages">1k images</span>
            </div>
            <button className="followButton"><a href="#" className="followLink">Follow</a></button>
        </div>
    )
}

export default Follow;