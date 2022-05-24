import React from "react";

function DrapdownContent() {
    return(
        <div className="dropdownContent">
            <div className="dropdownColumn">
                <div className="dropdownContentTitle">Company Projects</div>
                <div>
                    <a href="#" className="menuItems">
                        <span className="itemTitle">Flaction</span>
                        <span className="itemText">Free customizable icons</span>
                    </a>
                    <a href="#" className="menuItems">
                        <span className="itemTitle">Solidesgo</span>
                        <span className="itemText">Free presentation templates</span>
                    </a>
                    <a href="#" className="menuItems">
                        <span className="itemTitle">Storyset by freepik</span>
                        <span className="itemText">Free editable illastrations</span>
                    </a>
                    <a href="#" className="menuItems">
                        <span className="itemTitle">Vidfy</span>
                        <span className="itemText">Free diveos in 4k and HD</span>
                    </a>
                </div>
            </div>
            <div className="dropdownColumn">
                <div className="dropdownContentTitle">Tools</div>
                <a href="#" className="menuItems">
                    <span className="itemTitle">Wepik</span>
                    <span className="itemText">Edit your freepik templates</span>
                </a>
            </div>
            <div className="dropdownColumn">
                <div className="dropdownContentTitle">Apps & Plugins</div>
                <div>
                    <a href="#" className="menuItems">
                        <span className="itemTitle">Freepik for Figma</span>
                        <span className="itemText">Images for your Figma projects</span>
                    </a>
                    <a href="#" className="menuItems">
                        <span className="itemTitle">Storyset by Figma</span>
                        <span className="itemText">Illustrations for your Figma projects</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DrapdownContent;