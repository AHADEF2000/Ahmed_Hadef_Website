function Web() {

    const handleOpen = () => {
        document.querySelector(".web-modal").showModal();
    }

    const handleClose = () => {
        document.querySelector(".web-modal").close();
    }

    return (
        <>
            <div className="service-box">
                <div className="service-content">
                    <div className="service-icon">
                        <i className="uil uil-web-grid"></i>
                    </div>
                    <h2>Web <br /> Design </h2>
                    <div className="more" onClick={handleOpen}>
                        <p>View More </p>
                        <i className="uil uil-arrow-right"></i>
                    </div>
                </div>
            </div>

            <dialog className="web-modal">
                <button id="close-btn" type="button" onClick={handleClose}> X </button>
                <div className="service-title">
                    <h2>Web Design</h2>
                    <p>Providing quality work to clients and companies.</p>
                </div>
                <ul className="service-info">
                    <li> <i className="uil uil-check-circle"></i>  I develop the user interface.</li>
                    <li> <i className="uil uil-check-circle"></i>  Web page development.</li>
                    <li> <i className="uil uil-check-circle"></i>  I create UX element interactions.</li>
                </ul>
            </dialog>
        </>
    )
}

export default Web;
