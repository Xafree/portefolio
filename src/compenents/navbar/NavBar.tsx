import React from 'react';
import { Link } from "react-router";
import home from "../../assets/icons/home.png";
import contact from "../../assets/icons/contact.png";
import project from "../../assets/icons/project.png";
import tools from "../../assets/icons/tools.png";
import works from "../../assets/icons/works.png";
import "./navbar.css";


/**
 * NavBar of application, using Link from react-router
 * This nav bar is completly responsive with tablet, desktop and mobile
 */
export function NavBar() {

    return(
        <div className="navbar">
            <ul className="contaner">
                <div className="icon" data-tooltip="Accueil">
                    <Link to="/" className="link"><img src={home}  alt={"home button"} className="img-icon"/></Link>
                </div>
                <div className="icon" data-tooltip="Projects">
                    <Link to="/projects" className="link"><img src={project}  alt={"project button" } className="img-icon"/></Link>
                </div>
                <div className="icon" data-tooltip="Experiences">
                    <Link to="/cxperiences" className="link"><img src={works}  alt={"experience button"} className="img-icon"/></Link>
                </div>
                <div className="icon" data-tooltip="tools">
                    <Link to="/tools" className="link"><img src={tools}  alt={"tools button"} className="img-icon"/></Link>
                </div>
                <div className="icon" data-tooltip="Contact">
                    <Link to="/contact" className="link"><img src={contact}  alt={"contact button"} className="img-icon"/></Link>
                </div>
            </ul>
        </div>
    );
}