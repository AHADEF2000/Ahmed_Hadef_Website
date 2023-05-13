import "./about.css"
import Title from "../title/Title"
import Experience from "./Experience"
import Info from "./Info"
import Image from "../../assets/Imgs/about_img.png"


function About() {


    return (
        <>
            <section id="about">
                <Title title="About me" content="My Introduction" />
                <div className="container">
                    <img src={Image} />
                    <div className="about-content">
                        <Experience />
                        <Info />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About