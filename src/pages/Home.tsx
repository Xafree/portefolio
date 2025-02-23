import React from 'react';
import {NavBar} from "../compenents/navbar/NavBar";
import '../styles/home.css';
import {CardProfil} from "../compenents/card/card-profil/CardProfil";

/*
 * Home page
 */
export function Home() {
    return(
        <div className="global-home-page">
            <NavBar/>
            <div>
                <CardProfil/>
                <div></div>
            </div>
        </div>
    );
}