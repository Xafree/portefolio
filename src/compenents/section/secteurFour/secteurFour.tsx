import React from "react";
import ReactIcon from '../../../assets/icons/react.svg';
import Angular from '../../../assets/icons/angular.svg';
import Java from '../../../assets/icons/java.svg';
import Nest from '../../../assets/icons/nest.svg';
import Mongo from '../../../assets/icons/mongo.svg';
import MySql from '../../../assets/icons/mysql.svg';
import './secteurFour.css';

interface ISecteurFour {
    page:string;
}
export function SecteurFour({page}:ISecteurFour) {

    return(
        <section className="section-four">
            <h1 className={page === "tools" ? "section-one-Two-Project" : "section-one-Two"}>TECHNOLOGIE<span> FAVORI </span></h1>
            <div className="cards-tech">
                <div className="tech">
                    <img src={ReactIcon} alt={"React Icon"}/>
                    <div className="explain-text">
                        <h3>React</h3>
                        <p>Website Builder</p>
                    </div>
                </div>
                <div className="tech">
                    <img src={Angular} alt={"Angular Icon"}/>
                    <div className="explain-text">
                        <h3>Angular</h3>
                        <p>Website Builder</p>
                    </div>
                </div>
                <div className="tech">
                    <img src={Java} alt={"Java Icon"}/>
                    <div className="explain-text">
                        <h3>Java</h3>
                        <p>Backend Builder</p>
                    </div>
                </div>
                <div className="tech">
                    <img src={Nest} alt={"NestJS Icon"}/>
                    <div className="explain-text">
                        <h3>NestJS</h3>
                        <p>Backend Builder</p>
                    </div>
                </div>
                <div className="tech">
                    <img src={Mongo} alt={"React Icon"}/>
                    <div className="explain-text">
                        <h3>Mongo DB</h3>
                        <p>No relational database</p>
                    </div>
                </div>
                <div className="tech">
                    <img src={MySql} alt={"React Icon"}/>
                    <div className="explain-text">
                        <h3>MySQL</h3>
                        <p>Relational database</p>
                    </div>
                </div>
            </div>
        </section>
    );
}