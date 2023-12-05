import MediaMarkImg from "../../assets/Imgs/Media_Mark.png";

function ReactJs() {
  return (
    <>
      <div className="project-list-item">
        <a href="https://media-mark-company.netlify.app/" target="blank">
          <img src={MediaMarkImg} />
          <div className="project-info">
            <h3>Media Mark Company</h3>
            <p>
              More Details <i className="uil uil-arrow-right"></i>
            </p>
          </div>
        </a>
      </div>
    </>
  );
}

export default ReactJs;
