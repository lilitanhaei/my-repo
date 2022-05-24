import React from "react";
import MoreDrapdown from "./MoreDrapdown";

function Navbar() {
    return(
        <div className="navbar">
            <div className="navbarLeftItems">
                <a href="#" className="navbarItem">Vectors</a>
                <a href="#" className="navbarItem">photos</a>
                <a href="#" className="navbarItem">PSD</a>
                <div className="navbarItem">
                <a href="#" className="navbarItem">Fonts</a>
                    <span className="newLabel">NEW</span>
                </div>
                <a href="#" className="navbarItem">ategories</a>
                <a href="#" className="navbarItem">Collections</a>
                <MoreDrapdown/>
            </div>
            <div className="navbarRightItems">
                <a href="#" className="navbarItem">Sell your content</a>
                <div className="navbarItem" style={{color:"yellow"}}>
                    <a href="#" className="navbarItem pricing">Pricing</a>
                </div>
                <a href="#" className="navbarItem">Log in</a>
                <div className="navbarItem" style={{border: "1px solid #4a6375"}}>
                    <a href="#" className="navbarItem">Sign up</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;