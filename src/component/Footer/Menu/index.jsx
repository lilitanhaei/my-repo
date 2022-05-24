import React from "react";
import MediasAndSignUp from "./MediasAndSignUp";


function MenuItems(){
    const leftItems= ["New images", "The most popular content","Search trends", "Blog"]
    const middleItems= ["Plans & pricing", "About us", "Jobs", "Sell your content"]
    const rightItems= ["Terms & Conditions", "License Agreement", "Privacy policy", "Copyright information", "Cookies policy"]
    const leftColumn = 
    <ul>
        {leftItems.map((item,index)=>
        <li className="menuItem" key={index}>{item}</li>)}
    </ul>

    const middleColoumn = 
    <ul>
        {middleItems.map((item,index)=>
        <li className="menuItem" key={index}>{item}</li>)}
    </ul>

    const rightColoumn = 
    <ul>
        {rightItems.map((item,index)=>
        <li className="menuItem" key={index}>{item}</li>)}
    </ul>

    return(
        <div className="menu">
            <div>
                <h3 className="menuTitle">CONTENT</h3>
                {leftColumn}
            </div>
            <div>
                <h3 className="menuTitle">INFORMATION</h3>
                {middleColoumn}
            </div>
            <div>
                <div>
                    <h3 className="menuTitle">LEGAL</h3>
                    {rightColoumn}
                </div>
                <div>
                    <h3 className="menuTitle">HELP</h3>
                    <ul>
                        <li className="menuItem">Support</li>
                        <li className="menuItem">contact</li>
                    </ul>
                </div>
            </div>
            <MediasAndSignUp/>
        </div>
    )
}

export default MenuItems;