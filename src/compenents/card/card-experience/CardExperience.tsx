import React from "react";
import './CardExperience.css';

interface ICardExperience {
    company:string,
    titleJob:string,
    description:string,
    date:string,
}
export function CardExperience({company,titleJob,description,date}:ICardExperience) {
    return(
        <div className="Card-Experience">
            <div className="title-Experience">
                <h2>{titleJob}</h2>
                <h2>{company}</h2>
            </div>
            <div className="details-Experience">
                <div className="details-texte-Experience">
                    <p>{description}</p>
                    <p>{date}</p>
                </div>
                <svg className="arrow-svg-experience" width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    );
}