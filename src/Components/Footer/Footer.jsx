import "./footer.css"
function Footer() {
    return (
        <>
            <footer>
                <h1>Ahmed</h1>
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#services">Services</a></li>
                    </ul>
                </nav>
                <div className="social-media">
                    <a href="https://github.com/AHADEF2000" target="blank"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/ahmed-aly-57916426b/" target="blank"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/a.hadef02/" target="blank"> <i className="fa-brands fa-instagram"></i></a>
                </div>
                <p>&copy; 2023 Ahmed Hadef. All rights reserved.</p>

            </footer>
        </>
    )
}

export default Footer