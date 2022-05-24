import React from "react";
import image1 from "../../theme/Images/website-presentation-mockup-isolated_1.webp"
import image2 from "../../theme/Images/website-presentation-mockup-isolated_2.webp"
import image3 from "../../theme/Images/website-presentation-mockup-isolated_3.webp"
import image4 from "../../theme/Images/web-template-restaurant.webp"
import freepik from "../../theme/Images/freepik.jpg"
import designvarrior from "../../theme/Images/designvarrior.jpg"
import image5 from "../../theme/Images/full-screen-smartphone-laptop-mockup-design.webp"
import image6 from "../../theme/Images/realistic-screen-mock-up.webp"
import image7 from "../../theme/Images/kids-sport-social-media-template.webp"
import image8 from "../../theme/Images/laptop-screen-mockup-isolated.webp"
import image9 from "../../theme/Images/laptop-screen-mock-up.webp"
import image10 from "../../theme/Images/laptop-screen-with-website-presentation-mockup-isolated.webp"
import image11 from "../../theme/Images/seo-services-marketing-web-template-digital-agency.webp"
import image12 from "../../theme/Images/artist-room-decorated.webp"
import image13 from "../../theme/Images/move-by-bike-landing-page.webp"
import image14 from "../../theme/Images/dektop-website-mockup.webp"
import image15 from "../../theme/Images/website-mockup-design.webp"
import image16 from "../../theme/Images/laptop-screen-with-website-presentation-mockup-isolated.webp"
import image17 from "../../theme/Images/laptop-screen-with-website-presentation-mockup-isolated-1.webp"
import image18 from "../../theme/Images/desktop-website-presentation-mockup.webp"
import image19 from "../../theme/Images/internet-browser-window-landing-page-mockup.webp"
import image20 from "../../theme/Images/digital-device-screen-mockup-vector-with-laptop-smartphone-with-gradient-wallpapers.webp"
import ImagesRow from "./ImagesRow";
import TemplateItem from "./TemplateItem";

function TemplateList() {
    return(
        <div className="templateList">
            <h2 className="templateListTitle">Website design for your business Free Psd</h2>
            <span className="templateListText">You might also like</span>
            <div style={{display:"flex"}}>
                <TemplateItem image={image1} title="Website presentation mocup isolated" avatar={freepik} name="freepik"/>
                <TemplateItem image={image2} title="Website presentation mocup isolated" avatar={freepik} name="freepik"/>
                <TemplateItem image={image3} title="Website presentation mocup isolated" avatar={designvarrior} name="freepik"/>
                <TemplateItem image={image4} title="Website presentation mocup isolated" avatar={freepik} name="freepik"/>
            </div>
            <ImagesRow/>
            <div style={{display:"flex", flexWrap:"wrap"}}>
                <TemplateItem image={image5} title="Website presentation mocup isolated" avatar={freepik} name="freepik"/>
                <TemplateItem image={image6} title="Website presentation mocup isolated" avatar={freepik} name="freepik"/>
                <TemplateItem image={image7} title="Website presentation mocup isolated" avatar={freepik} name="freepik"/>
                <TemplateItem image={image8} title="Website presentation mocup isolated" avatar={freepik} name="freepik"/>
                <TemplateItem image={image9} title="Website presentation mocup isolated" avatar={freepik} name="freepik"/>
                <TemplateItem image={image10} title="Website presentation mocup isolated" avatar={freepik} name="freepik"/>
                <TemplateItem image={image11} title="Website presentation mocup isolated" avatar={freepik} name="freepik"/>
                <TemplateItem image={image12} title="Website presentation mocup isolated" avatar={freepik} name="freepik"/>
                <TemplateItem image={image13} title="Website presentation mocup isolated" avatar={freepik} name="freepik"/>
                <TemplateItem image={image14} title="Website presentation mocup isolated" avatar={freepik} name="freepik"/>
                <TemplateItem image={image15} title="Website presentation mocup isolated" avatar={freepik} name="freepik"/>
                <TemplateItem image={image16} title="Website presentation mocup isolated" avatar={freepik} name="freepik"/>
                <TemplateItem image={image17} title="Website presentation mocup isolated" avatar={freepik} name="freepik"/>
                <TemplateItem image={image18} title="Website presentation mocup isolated" avatar={freepik} name="freepik"/>
                <TemplateItem image={image19} title="Website presentation mocup isolated" avatar={freepik} name="freepik"/>
                <TemplateItem image={image20} title="Website presentation mocup isolated" avatar={freepik} name="freepik"/>
            </div>
        </div>
    )
}

export default TemplateList;