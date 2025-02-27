import React from "react";
import './sectionTwo.css';
import {CardProject} from "../../card/card-project/cardProject";
import {DATAPROJECT} from '../../../services/data';

interface ISectionTwo {
    page:string,
}
export function SectionTwo({page}:ISectionTwo) {

    const data = DATAPROJECT;

    const Top3Project = (data:any):any[] => {
        let out :any[] = []
        data.forEach((element:any, index:number)=>{
              if( index<=2){
                  out.push(element);
              }
        });
        return out;
    }

    return(
        <section className="section-two">
            <h1 className="section-one-Two">RECENT <span>PROJECTS</span></h1>
            <div className="cards">
                { page === "project"  ?
                    data.map((project, index) =>{
                        return <CardProject  description={project.description} imgDescription={project.imgDescription} imgLink={project.imgLink} projectName={project.projectName} key={index}/>
                    })
                    :
                    Top3Project(data).map((project, index) =>{
                        return <CardProject  description={project.description} imgDescription={project.imgDescription} imgLink={project.imgLink} projectName={project.projectName} key={index}/>
                    })
                }
            </div>
        </section>
    )
}