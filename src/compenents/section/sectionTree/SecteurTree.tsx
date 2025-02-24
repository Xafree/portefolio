import React from "react";
import './SecteurTree.css';
import {DATAEXPERIENCE} from "../../../services/data";
import {CardExperience} from "../../card/card-experience/CardExperience";


export function SecteurTree() {

    const data = DATAEXPERIENCE

    return(
        <section>
            <h1 className="section-one-h1">4 YEARS OF <span>EXPERIENCES</span></h1>
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