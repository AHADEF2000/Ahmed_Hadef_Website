import CV from "../../assets/docs/AHMED ALY_CV.pdf";

function Info() {

    return (
        <>
            <p>Front End Developer, I create web pages and am very passionate about it. I create the right websites for your business.</p>
            <button type="button" id="btn"> <a href={CV} download='ahmed_cv'> Download CV <i className="fa-regular fa-file-lines"></i></a></button>
        </>
    )
}

export default Info