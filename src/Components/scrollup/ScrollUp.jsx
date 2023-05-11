import "./scroll.css"
function ScrollUp() {

    window.addEventListener("scroll", () => {
        const scrollUp = document.querySelector(".scroll-up")

        if (window.scrollY >= 560) {
            scrollUp.classList.add("show-scroll")
        }
        else {
            scrollUp.classList.remove("show-scroll")
        }
    })
    return (
        <>
            <a href="#" className="scroll-up">
                <i className="fa-solid fa-arrow-up"></i>
            </a >
        </>

    )
}

export default ScrollUp