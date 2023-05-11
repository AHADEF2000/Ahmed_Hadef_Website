function Send() {
    return (
        <>
            <div className="send">
                <div className="send-box">
                    <div className="send-item">
                        <div className="icon">
                            <i className="fa-regular fa-envelope"></i>
                        </div>
                        <div className="info">
                            <h2>Email</h2>
                            <p>ahadef130820@gmail.com</p>
                        </div>
                        <a href="mailto:ahadef130820@gmail.com" target="blank" className="btn"> <p> Write me </p> <i className="uil uil-arrow-right"></i></a>
                    </div>
                    <div className="send-item">
                        <div className="icon">
                            <i className="fa-brands fa-whatsapp"></i>
                        </div>
                        <div className="info">
                            <h2>Whatsapp</h2>
                            <p>+974-775-55459</p>
                        </div>
                        <a href="https://api.whatsapp.com/send?phone=+97477555459&text=Hello, more information!" target="blank" className="btn"> <p> Write me </p> <i className="uil uil-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Send