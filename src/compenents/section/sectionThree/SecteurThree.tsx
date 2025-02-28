import React from "react";
import './SecteurThree.css';
import {DATAEXPERIENCE} from "../../../services/data";
import {CardExperience} from "../../card/card-experience/CardExperience";

interface ISecteurThree {
    page: string;
}
export function SecteurThree({page}:ISecteurThree) {

    const data = DATAEXPERIENCE

    const top3Project = (data:any):any[] => {
        let out :any[] = []
        data.forEach((element:any, index:number)=>{
            if( index<=2){
                out.push(element);
            }
        });
        return out;
    }

    return(
        <section className="section-three">
            <h1 className={page === "experiences" ? "section-one-Two-Project" : "section-one-Two"}>4 ANNÉES <span>D'EXPERIENCES</span></h1>
            <div className="cards">
                {page === "experiences" ?
                    data.map((experience, index) =>{
                        return <CardExperience description={experience.description} date={experience.Date} company={experience.company} titleJob={experience.titleJob} link={experience.link}/>
                    })
                    :
                    top3Project(data).map((experience, index) =>{
                        return <CardExperience description={experience.description} date={experience.Date} company={experience.company} titleJob={experience.titleJob} link={experience.link}/>
                    })
                }
            </div>
        </section>
    )
}