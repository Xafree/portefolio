import React from "react";
import './SecteurThree.css';
import {DATAEXPERIENCE} from "../../../services/data";
import {CardExperience} from "../../card/card-experience/CardExperience";


export function SecteurThree() {

    const data = DATAEXPERIENCE

    return(
        <section className="section-three">
            <h1 className="section-one-Two">4 YEARS OF <span>EXPERIENCES</span></h1>
            <div className="cards">
                {
                    data.map((experience, index) =>{
                        return <CardExperience description={experience.description} date={experience.Date} company={experience.company} titleJob={experience.titleJob}/>
                    })
                }
            </div>
        </section>
    )
}