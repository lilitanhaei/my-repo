import React from "react";
import CopyRight from "./CopyRight";
import FreepikProjects from "./FreepikProjects";
import MenuItems from "./Menu";

function Footer() {
    return(
        <div>
            <MenuItems/>
            <CopyRight/>
            <FreepikProjects/>
        </div>
    )
}

export default Footer;