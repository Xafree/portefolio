import React from 'react';
import {NavBar} from "../compenents/navbar/NavBar";
import {CardProfil} from "../compenents/card/card-profil/CardProfil";
import {SectionTwo} from "../compenents/section/sectionTwo/sectionTwo";
import {ScrollAnimation} from "../styles/animation/ScrollAnimation";
import {SecteurFive} from "../compenents/section/SecteurFive/secteurFive";

/*
 * Home page
 */
export function Project() {
    return(
        <div className="global-home-page">
            <NavBar/>
            <div className="body-home-page">
                <CardProfil/>
                <div className="section">
                    <ScrollAnimation>
                        <SectionTwo page={"project"}/>
                    </ScrollAnimation>
                    <ScrollAnimation>
                        <SecteurFive page={"home"}/>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
}