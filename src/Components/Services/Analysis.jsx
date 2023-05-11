function Analysis() {

    const handleOpen = () => {
        document.querySelector(".analysis-modal").showModal();
    }

    const handleClose = () => {
        document.querySelector(".analysis-modal").close();
    }

    return (
        <>
            <div className="service-box">
                <div className="service-content">
                    <div className="service-icon">
                        <i className="fa-solid fa-chart-line"></i>
                    </div>
                    <h2>Data <br /> Analysis </h2>
                    <div className="more" onClick={handleOpen}>
                        <p>View More </p>
                        <i className="uil uil-arrow-right"></i>
                    </div>
                </div>
            </div>
            <dialog className="analysis-modal">
                <button id="close-btn" type="button" onClick={handleClose}>X</button>
                <div className="service-title">
                    <h2>Data Analysis</h2>
                    <p>Providing insightful analysis to clients and companies.</p>
                </div>
                <ul className="service-info">
                    <li> <i className="uil uil-check-circle"></i>  Collect and clean data from various sources.</li>
                    <li> <i className="uil uil-check-circle"></i>  Analyze data using statistical techniques and tools.</li>
                    <li> <i className="uil uil-check-circle"></i>  Visualize and present data in an understandable way.</li>
                </ul>
            </dialog >
        </>
    )
}

export default Analysis