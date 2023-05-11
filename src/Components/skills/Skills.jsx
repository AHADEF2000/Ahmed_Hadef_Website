import Title from "../title/Title"
import Frontend from "./Frontend"
import Other from './Other'
import "./skills.css";

function Skills() {
    return (
        <>
            <section id="skills">
                <Title title="Skills" content="My Technical Level" />
                <div className="container">
                    <Frontend />
                    <Other />
                </div>

            </section>
        </>
    )
}

export default Skills