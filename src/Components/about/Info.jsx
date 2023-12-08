import resume from "../../assets/docs/Ahmed_Hadef_Resume.pdf";

function Info() {
  return (
    <>
      <div className="about-info">
        <p>
          Front End Developer, I create web pages and am very passionate about
          it. I create the right websites for your business.
        </p>
        <button type="button" id="btn">
          <a href={resume} download="ahmed_cv">
            Download CV <i className="fa-regular fa-file-lines"></i>
          </a>
        </button>
      </div>
    </>
  );
}

export default Info;
