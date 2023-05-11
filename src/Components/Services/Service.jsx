import Title from "../title/Title"
import Analysis from "./Analysis"
import Apps from "./Apps"
import "./service.css"
import Web from "./Web"


function Service() {

    return (
        <>
            <section id="services">
                <Title title="Services" content="What I Offer" />
                <div className="container">
                    <Web />
                    <Apps />
                    <Analysis />
                </div>
            </section>
        </>
    )
}

export default Service