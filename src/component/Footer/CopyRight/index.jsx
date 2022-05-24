 import React from "react";

 function CopyRight() {
    return(
        <div className="copyRight">
            <div className="copyRightText">
                <a className="freepik"><img src="https://freepik.cdnpk.net/img/logos/freepikcompany-footer.svg"/></a>
                <p>Copyright ©  2010-2022 Freepik Company S.L. All rights reserved.</p>
            </div>
            <div>
                <button className="languageButton">
                    <span>English</span>
                    <i className="fa fa-caret-down"></i>
                </button>
            </div>
        </div>
    )
 }
 
 export default CopyRight;