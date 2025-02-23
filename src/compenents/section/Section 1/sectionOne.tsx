import React from "react";
import "./sectionOne.css";
import planSuperposerIcons from '../../../assets/icons/plan-superposer.png';
import architetureIcons from '../../../assets/icons/architechure.png';

/**
 * Section one of my portfolio
 * @constructor any
 */
export function SectionOne() {
    return(
        <section className="section-one">
            <h1 className="section-one-h1">FULLSTACK <span>DEVELOPER</span></h1>
            <p className="section-one-p">Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.</p>
            <div className="score">
                <p>+4 <span>YEARS OF EXPERIENCE</span></p>
                <p>+10 <span>PROJECTS COMPLETED</span></p>
            </div>
            <div className="div-block">
                <div className="left-block">
                    <img src={planSuperposerIcons} alt={"Plan superposer"}/>
                    <p> Dynamic project, Fantastic experiences</p>
                    <button className="button-arrow-white">
                        <svg className="arrow-Icon-white" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h16M16 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
                <div className="right-block">
                    <img src={architetureIcons} alt={"architecture icons"}/>
                    <p>ReactJS, NodeJS, Java, mongoDB, MySql</p>
                    <button className="button-arrow-black">
                        <svg className="arrow-Icon-black" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h16M16 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}