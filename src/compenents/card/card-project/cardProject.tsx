import React from "react";
import './cardProject.css';

interface ICardproject {
    imgLink:string,
    imgDescription:string,
    projectName:string,
    description:string,
}
export function CardProject({imgLink,imgDescription,projectName,description}:ICardproject) {
    return(
        <div className="card-project">
            <div className="card-img-container">
                <img src={imgLink} alt={imgDescription} className="card-image"/>
            </div>
            <div className="details">
                <div className="details-text">
                    <h3>{projectName}</h3>
                    <p>{description}</p>
                </div>
                <svg className="arrow-svg" width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    );
}