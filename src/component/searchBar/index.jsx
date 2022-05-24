import React, { useState } from "react";
import freepik from "../../theme/Images/freepik.jpg"

function SearchBar() {

    const [showItems, setShowItems] = useState(false);

    function change(e){
        e.preventDefault();
        setShowItems(!showItems)
    }

    return(
        <div className="searchBar">
            <div className="logo">
                <img className="freepikLogo" src={freepik}/>
                <div className="freepik">freepik</div>
            </div>
            <div className="searchInput">
                <div className="searchDropdwon">
                    <p className="searchItem">images</p>
                    <button onClick={change} className="dropdown">
                        <i className="fa fa-caret-down"></i>
                    </button>
                </div>
                <input type={"text"} placeholder="Search all images"/>
                <a className="searchIcon" href="#"><i className="fa fas fa-search"></i></a>
            </div>
        </div>
    )
}

export default SearchBar;