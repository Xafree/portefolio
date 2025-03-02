import React from 'react';
import {NavBar} from "../compenents/navbar/NavBar";
import '../styles/home.css';
import {CardProfil} from "../compenents/card/card-profil/CardProfil";
import {SectionOne} from "../compenents/section/sectionOne/sectionOne";
import {SectionTwo} from "../compenents/section/sectionTwo/sectionTwo";
import {ScrollAnimation} from "../styles/animation/ScrollAnimation";
import {SecteurThree} from "../compenents/section/sectionThree/SecteurThree";
import {SecteurFour} from "../compenents/section/secteurFour/secteurFour";
import {SecteurFive} from "../compenents/section/SecteurFive/secteurFive";

/*
 * Home page
 */
export function Home() {
    return(
        <div className="global-home-page">
            <NavBar/>
            <div className="body-home-page">
                    <CardProfil/>
                <div className="section">
                    <SectionOne/>
                    <ScrollAnimation>
                        <SectionTwo page={"home"}/>
                    </ScrollAnimation>
                    <ScrollAnimation>
                        <SecteurThree page={"home"}/>
                    </ScrollAnimation>
                    <ScrollAnimation>
                        <SecteurFour page={"home"}/>
                    </ScrollAnimation>
                    <ScrollAnimation>
                        <SecteurFive  page={"home"}/>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
}