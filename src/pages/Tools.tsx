import React from 'react';
import {NavBar} from "../compenents/navbar/NavBar";
import {CardProfil} from "../compenents/card/card-profil/CardProfil";
import {ScrollAnimation} from "../styles/animation/ScrollAnimation";
import {SecteurFive} from "../compenents/section/SecteurFive/secteurFive";
import {SecteurFour} from "../compenents/section/secteurFour/secteurFour";

/*
 * Home page
 */
export function Tools() {
    return(
        <div className="global-home-page">
            <NavBar/>
            <div className="body-home-page">
                <CardProfil/>
                <div className="section">
                    <ScrollAnimation>
                        <SecteurFour page={"tools"} />
                    </ScrollAnimation>
                    <ScrollAnimation>
                        <SecteurFive  page={"home"}/>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
}