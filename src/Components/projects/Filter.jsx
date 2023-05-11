import { useState } from "react"
import All from "./All"
import HTML_CSS from "./HTML_CSS"
import JavaScript from "./JavaScript"

function Filter() {


    const [activeBtn, setActiveBtn] = useState("all");

    const handleClickBtn = (e) => {
        setActiveBtn(e.target.id)
    }

    const renderCompnent = () => {
        switch (activeBtn) {
            case "all":
                return <All />
            case "html-css":
                return <HTML_CSS />
            case "js":
                return <JavaScript />
        }
    }

    return (
        <>
            <div className="btns">
                <button id="all" type="button" className={activeBtn === "all" ? "active" : ""} onClick={handleClickBtn}> All</button>
                <button id="html-css" type="button" className={activeBtn === "html-css" ? "active" : ""} onClick={handleClickBtn}> HTML & CSS </button>
                <button id="js" type="button" className={activeBtn === "js" ? "active" : ""} onClick={handleClickBtn}> JavaScript   </button>
            </div >

            <div className="project-list">
                {renderCompnent()}
            </div>
        </>
    )
}

export default Filter