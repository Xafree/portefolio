import React from 'react';
import {NavBar} from "../compenents/navbar/NavBar";
import {CardProfil} from "../compenents/card/card-profil/CardProfil";
import {ScrollAnimation} from "../styles/animation/ScrollAnimation";
import {SecteurFive} from "../compenents/section/SecteurFive/secteurFive";

/*
 * Home page
 */
export function Contact() {
    return(
        <div className="global-home-page">
            <NavBar/>
            <div className="body-home-page">
                <CardProfil/>
                <div className="section">
                    <ScrollAnimation>
                        <SecteurFive  page={"contact"}/>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
}