import React from 'react';
import {NavBar} from "../compenents/navbar/NavBar";
import '../styles/home.css';
import {CardProfil} from "../compenents/card/card-profil/CardProfil";
import {SectionOne} from "../compenents/section/Section 1/sectionOne";

/*
 * Home page
 */
export function Home() {
    return(
        <div className="global-home-page">
            <NavBar/>
            <div className="body-home-page">
                <CardProfil/>
                <SectionOne />
            </div>
        </div>
    );
}