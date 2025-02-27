import React from 'react';
import {NavBar} from "../compenents/navbar/NavBar";
import {CardProfil} from "../compenents/card/card-profil/CardProfil";
import {ScrollAnimation} from "../styles/animation/ScrollAnimation";
import {SecteurFive} from "../compenents/section/SecteurFive/secteurFive";
import {SecteurThree} from "../compenents/section/sectionThree/SecteurThree";

/*
 * Home page
 */
export function Experiences() {
    return(
        <div className="global-home-page">
            <NavBar/>
            <div className="body-home-page">
                <CardProfil/>
                <div className="section">
                    <ScrollAnimation>
                        <SecteurThree page={"experiences"}/>
                    </ScrollAnimation>
                    <ScrollAnimation>
                        <SecteurFive  page={"home"}/>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
}