import React from "react";
import './secteurFive.css';
interface ISecteurFive {
    page:string;
}
export function SecteurFive({page}:ISecteurFive) {

    return(
        <section className="section-five">
            <h1 className={page === "contact" ? "section-one-Two-Project" : "section-one-Two"}>LET'S WORK <span> TOGETHER</span></h1>
            <p className="content-texte">
                Besoin d’un site web performant et sur-mesure ?
                En tant que développeur Fullstack, je conçois des applications modernes et optimisées.
                De l’interface utilisateur à l’infrastructure serveur, je gère tout le processus.
                Performance, sécurité et innovation sont mes priorités.
                Prêt à concrétiser votre projet ? Contactez-moi !</p>
            <a href="mailto:emmanuel.eberst.pro@hotmail.com?subject=Premier contact" className="contact-me" >
                <button className="contact-me">CONTACT MOI</button>
            </a>
        </section>
    );
}