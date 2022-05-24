import React from "react";

function MediasAndSignUp() {
    return(
        <div>
            <div>
                <h3 className="menuTitle">SOCIAL MEDIA</h3>
                <div>
                    <i className="icon faceBook fa fab fa-facebook-f"></i>
                    <i className="icon twitter fa fab fa-twitter"></i>
                    <i className="icon pinterest fa fab fa-pinterest"></i>
                    <i className="icon instagram fa fab fa-instagram"></i>
                    <i className="icon youtube fa fab fa-youtube"></i>
                </div>
            </div>
            <div>
                <span className="getImages">Get exclusive images sent straight to your inbox</span>
                <a href="#" className="signUpLink">
                    <span className="signUpText">Sign up</span>
                </a>
            </div>
        </div>
    )
}

export default MediasAndSignUp