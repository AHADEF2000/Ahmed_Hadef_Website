import Title from "../title/Title"
import Frontend from "./Frontend"
import Backend from './Backend'
import "./skills.css";

function Skills() {
    return (
        <>
            <section id="skills">
                <Title title="Skills" content="My Technical Level" />
                <div className="container">
                    <Frontend />
                    <Backend />
                </div>

            </section>
        </>
    )
}

export default Skills