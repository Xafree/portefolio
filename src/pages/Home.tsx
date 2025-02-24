import React from 'react';
import {NavBar} from "../compenents/navbar/NavBar";
import '../styles/home.css';
import {CardProfil} from "../compenents/card/card-profil/CardProfil";
import {SectionOne} from "../compenents/section/sectionOne/sectionOne";
import {SectionTwo} from "../compenents/section/sectionTwo/sectionTwo";
import {ScrollAnimation} from "../styles/animation/ScrollAnimation";
import {SecteurTree} from "../compenents/section/sectionTree/SecteurTree";

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
                        <SectionTwo/>
                    </ScrollAnimation>
                    <ScrollAnimation>
                        <SecteurTree/>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
}