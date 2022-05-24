import React from "react";
import image1 from "../../../theme/Images/rowImages1.jpg";
import image2 from "../../../theme/Images/rowImages2.jpg";
import image3 from "../../../theme/Images/rowImages3.jpg";
import image4 from "../../../theme/Images/rowImages4.jpg";
import image5 from "../../../theme/Images/rowImages5.jpg";
import image6 from "../../../theme/Images/rowImages6.jpg";
import image7 from "../../../theme/Images/rowImages7.jpg";


function ImagesRow() {
    return(
        <div className="imagesRow">
            <div><a href="#"><img src={image1} /></a></div>
            <div><a href="#"><img src={image2} /></a></div>
            <div><a href="#"><img src={image3} /></a></div>
            <div><a href="#"><img src={image4} /></a></div>
            <div><a href="#"><img src={image5} /></a></div>
            <div><a href="#"><img src={image6} /></a></div>
            <div><a href="#"><img src={image7} /></a></div>
        </div>
    )
}

export default ImagesRow;