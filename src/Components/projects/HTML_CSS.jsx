import projectOneImg from "../../assets/Imgs/project1_css.png"

function HTML_CSS() {
    return (
        <>
            <div className="project-list-item">
                <a href="https://html-css-only-project1.netlify.app/" target="blank">
                    <img src={projectOneImg} />
                    <div className="project-info">
                        <h3>HTML & CSS 1</h3>
                        <p> More Details  <i className="uil uil-arrow-right"></i></p>
                    </div>
                </a>
            </div>

        </>
    )
}

export default HTML_CSS