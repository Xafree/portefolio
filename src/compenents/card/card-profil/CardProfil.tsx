import React from "react";
import profil from '../../../assets/pictures/DSC08805.avif';
import github from '../../../assets/icons/github.png';
import instagram from '../../../assets/icons/instagram.png';
import linkedin from '../../../assets/icons/Linkedin.png';
import mail from '../../../assets/icons/mail.png';
import './cardprofil.css';

/**
 * Presentation card on the left page
 */
export function CardProfil() {
    return(
        <div className="profil-card-global">
            <div className="pricture-profil">
                <div className="image-container">
                    <img src={profil} alt={"Personal"} className="personal-picture"/>
                </div>
                <p className="name">Eberst Emmanuel</p>
            </div>
            <div className="card-bot">
                <p className="description"> Un développeur Fullstack axé sur la qualité et l’innovation, pour concrétiser vos idées.</p>
                <div className= "navapp">
                    <a href="https://www.linkedin.com/in/eeberst" rel="noreferrer" target="_blank" className="a-link">
                        <img src={linkedin} alt={"redirecction link, go to linkedin"}/>
                    </a>
                    <a href="https://github.com/Xafree" rel="noreferrer" target="_blank" className="a-link">
                        <img src={github} alt={"redirection link, go to guthub"}/>
                    </a>
                    <a href="https://www.instagram.com/emmanuel.ebrt/" rel="noreferrer" target="_blank" className="a-link">
                        <img src={instagram} alt={"redirection link, go to instragram"}/>
                    </a>
                    <a href="mailto:emmanuel.eberst.pro@hotmail.com?subject=Premier contact" rel="noreferrer" target="_blank" className="a-link">
                        <img src={mail} alt={"Send me a email"}/>
                    </a>
                </div>
            </div>
        </div>
    );
}