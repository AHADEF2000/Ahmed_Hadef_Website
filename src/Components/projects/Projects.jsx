import Title from "../title/Title"
import Filter from "./Filter"
import "./projects.css"

function Portfolio() {


    return (
        <>
            <section id="projects">
                <Title title="Portfolio" content="Most Recent Work" />
                <div className="container">
                    <Filter />
                </div>
            </section>
        </>
    )
}

export default Portfolio