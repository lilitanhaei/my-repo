import React, { useState } from 'react';
import DrapdownContent from './Drapdowncontent';

function MoreDrapdown() {
    const [showMoreMenu, setShowMoreMenu] = useState(false);

    function change(e){
        e.preventDefault();
        setShowMoreMenu(!showMoreMenu);
    }

    return(
        <div>
            <button className="moreButton" onClick={change}>
            <a href="#" className="moreLink">
                <div className="navbarItem">More</div>
                <i className="fa fa-caret-down"></i>
            </a>
            </button>
            { showMoreMenu ? (
                <div className="dropdownContent">
                    <DrapdownContent/>
                </div>
            ) : null
            }
        </div>
    )
}

export default MoreDrapdown;