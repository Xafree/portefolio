import React from "react";
import "./sectionOne.css";
import planSuperposerIcons from '../../../assets/icons/plan-superposer.png';
import architetureIcons from '../../../assets/icons/architechure.png';
import {ScrollAnimation} from "../../../styles/animation/ScrollAnimation";
import {Link} from "react-router";

/**
 * Section one of my portfolio
 * @constructor any
 */
export function SectionOne() {
    return(
        <section className="section-one">
            <ScrollAnimation>
                <h1 className="section-one-h1">FULLSTACK <span>DÉVELOPPEUR</span></h1>
            </ScrollAnimation>
            <p className="section-one-p">Ma passion pour le développement d'applications me pousse à affronter des défis de plus en plus sophistiqués afin de constamment améliorer mes compétences.</p>
            <div className="score">
                <p>+4 <span>ANNEES D'EXPÉRIENCE</span></p>
                <p>+10 <span>PROJET RÉUSSI</span></p>
            </div>
            <div className="div-block">
                <div className="left-block">
                    <img src={planSuperposerIcons} alt={"Plan superposer"}/>
                    <p>Fantastique experiences</p>
                    <Link to="/experiences">
                        <button className="button-arrow-white">
                            <svg className="arrow-Icon-white" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h16M16 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </Link>
                </div>
                <div className="right-block">
                    <img src={architetureIcons} alt={"architecture icons"}/>
                    <p>ReactJS, NodeJS, Java project</p>
                    <Link to="/projects">
                        <button className="button-arrow-black">
                            <svg className="arrow-Icon-black" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h16M16 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}