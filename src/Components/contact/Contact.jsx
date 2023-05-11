import Title from "../title/Title"
import Send from "./Send"
import "./contact.css"

function Contact() {
    return (
        <>
            <section id="contact">
                <Title title="Contact Me" content="Get In Touch" />
                <div className="container">
                    <Send />
                </div>
            </section>
        </>
    )
}

export default Contact