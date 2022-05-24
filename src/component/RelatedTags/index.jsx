import React from "react";

function RelatedTags() {
    const relatedTags = [ "site web", "site", "site template", "webpage template", "web", "site design", "business website",
    "responsive website", "responsive design", "webpage", "website templates", "blog template", "wordpress theme", "isometric web",
    "website page", "computer template", "marketing isometric", "marketing elements", "responsive", "corporate website" ];

    const tagsList = 
    <div>
        {relatedTags.map((item, index)=> <a href="#" key={index} className="tagsList" >{item}</a>)}
        <a href="#" className="moreRelatedTagsButton">+15</a>
    </div>
    return(
        <div className="relatedTags">
            <h3>Related tags</h3>
            {tagsList}
        </div>
    )
}

export default RelatedTags;