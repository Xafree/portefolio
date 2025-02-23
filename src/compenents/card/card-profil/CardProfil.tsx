import React from "react";
import profil from '../../../assets/pictures/DSC06824.jpg';
import github from '../../../assets/icons/github.png';
import instagram from '../../../assets/icons/instagram.png';
import linkedin from '../../../assets/icons/Linkedin.png';
import mail from '../../../assets/icons/mail.png';
import './cardprofil.css';

/**
 * Presentation card on the left page
 *
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
                <p className="description"> A Software Engineer who has developed countless innovative solutions.</p>
                <div className= "navapp">
                    <img src={linkedin} alt={"redirecction link, go to linkedin"}/>
                    <img src={github} alt={"redirection link, go to guthub"}/>
                    <img src={instagram} alt={"redirection link, go to instragram"}/>
                    <img src={mail} alt={"Sand me a email"}/>
                </div>
            </div>
        </div>
    );
}