import React from "react";
import './sectionTwo.css';
import {CardProject} from "../../card/card-project/cardProject";
import {DATAPROJECT} from '../../../services/data';

export function SectionTwo() {

    const data = DATAPROJECT;

    return(
        <section className="section-two">
            <h1 className="section-one-Two">RECENT <span>PROJECTS</span></h1>
            <div className="cards">
                {
                    data.map((project, index) =>{
                        return <CardProject  description={project.description} imgDescription={project.imgDescription} imgLink={project.imgLink} projectName={project.projectName}/>
                    })
                }
            </div>
        </section>
    )
}