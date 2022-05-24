import React from "react";

function FreepikProjects() {

    const projects = ["freepik", "flaticon", "Slidesgo", "wepik"];
    const projectsList = projects.map((item,index)=> 
        <div key={index} className="projectName">{item}</div>)

    return(
        <div className="companyProjects">
            <div className="companyProjectsTitle"><span>Freepik Company projects</span></div>
            <div className="companyProjectsList">
                {projectsList}
            </div>
        </div>
    )
}

export default FreepikProjects;