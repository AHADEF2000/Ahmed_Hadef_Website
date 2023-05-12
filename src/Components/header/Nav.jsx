import { useState, useEffect } from "react";
import "./nav.css";

function Nav() {

    const [active, setActive] = useState("home-nav");

    const [toggle, setToggle] = useState(false);
    function handleClick(event) {
        setActive(event.target.id);
    }

    useEffect(() => {
        const handleScroll = () => {
            const home = document.querySelector("#home");
            const about = document.querySelector("#about");
            const skills = document.querySelector("#skills");
            const services = document.querySelector("#services");
            const projects = document.querySelector("#projects");
            const contact = document.querySelector("#contact");

            if (contact.getBoundingClientRect().bottom <= window.innerHeight) {
                setActive("contact-nav");
            } else if (projects.getBoundingClientRect().bottom <= window.innerHeight) {
                setActive("projects-nav");
            } else if (services.getBoundingClientRect().bottom <= window.innerHeight) {
                setActive("services-nav");
            } else if (skills.getBoundingClientRect().bottom <= window.innerHeight) {
                setActive("skills-nav");
            } else if (about.getBoundingClientRect().bottom <= window.innerHeight) {
                setActive("about-nav");
            } else if (home.getBoundingClientRect().bottom <= window.innerHeight) {
                setActive("home-nav");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav id="navigation-bar">

                <div className="container">
                    <p className="logo"> AHMED </p>
                    <div id="toggle-menu" className={toggle === true ? "show-toggle-menu" : "toggle-menu"} >
                        <ul className="header-links" onClick={handleClick}>
                            <li> <a id="home-nav" href="#home" className={active === "home-nav" ? "active" : ""}> <i className="uil uil-estate"></i> Home</a> </li>
                            <li> <a id="about-nav" href="#about" className={active === "about-nav" ? "active" : ""}> <i className="uil uil-user"></i>About</a>  </li>
                            <li> <a id="skills-nav" href="#skills" className={active === "skills-nav" ? "active" : ""}> <i className="uil uil-file-alt"></i> Skills</a> </li>
                            <li> <a id="services-nav" href="#services" className={active === "services-nav" ? "active" : ""}> <i className="uil uil-suitcase"></i>Services </a> </li>
                            <li> <a id="projects-nav" href="#projects" className={active === "projects-nav" ? "active" : ""}> <i className="uil uil-image"></i> Projects</a> </li>
                            <li> <a id="contact-nav" href="#contact" className={active === "contact-nav" ? "active" : ""}> <i className="uil uil-message"></i>Contact</a> </li>
                        </ul>
                        <i className="nav-close" onClick={() => setToggle(false)}>X</i>
                    </div>
                    <i className="uil uil-apps" onClick={() => setToggle(true)}></i>
                </div >
            </nav>
        </>
    )
}

export default Nav