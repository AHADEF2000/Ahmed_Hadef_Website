import { useState, useEffect } from "react";
import "./nav.css";

function Nav() {

    const [active, setActive] = useState("home-nav");

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
                    <ul className="header-links">
                        <li> <a id="home-nav" href="#home" onClick={handleClick} className={active === "home-nav" ? "active" : ""}>Home</a> </li>
                        <li> <a id="about-nav" href="#about" onClick={handleClick} className={active === "about-nav" ? "active" : ""}> About</a>  </li>
                        <li> <a id="skills-nav" href="#skills" onClick={handleClick} className={active === "skills-nav" ? "active" : ""}> Skills</a> </li>
                        <li> <a id="services-nav" href="#services" onClick={handleClick} className={active === "services-nav" ? "active" : ""}>Services </a> </li>
                        <li> <a id="projects-nav" href="#projects" onClick={handleClick} className={active === "projects-nav" ? "active" : ""}> Projects</a> </li>
                        <li> <a id="contact-nav" href="#contact" onClick={handleClick} className={active === "contact-nav" ? "active" : ""}> Contact</a> </li>
                    </ul>
                </div >
            </nav>

        </>
    )
}

export default Nav