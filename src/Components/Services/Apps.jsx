function Apps() {

    const HandleOpen = () => {
        document.querySelector(".app-modal").showModal();
    }

    const handleClose = () => {
        document.querySelector(".app-modal").close();
    }

    return (
        <>
            <div className="service-box">
                <div className="service-content">
                    <div className="service-icon">
                        <i className="fa-brands fa-js"></i>
                    </div>
                    <h2>Create <br /> Apps </h2>
                    <div className="more" onClick={HandleOpen}>
                        <p>View More </p>
                        <i className="uil uil-arrow-right"></i>
                    </div>
                </div>
            </div>

            <dialog className="app-modal">
                <button id="close-btn" type="button" onClick={handleClose}> X </button>
                <div className="service-title">
                    <h2>Create Apps</h2>
                    <p>Building powerful and interactive applications using modern JavaScript frameworks and libraries.</p>
                </div>
                <ul className="service-info">
                    <li><i className="uil uil-check-circle"></i> Front-end development using React.</li>
                    <li><i className="uil uil-check-circle"></i> Integrating third-party APIs and services</li>
                </ul>

            </dialog>
        </>
    )
}

export default Apps