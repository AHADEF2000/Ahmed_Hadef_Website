import todoImg from "../../assets/Imgs/todo-app.png"
import quizImg from "../../assets/Imgs/Quiz_app.png"
import hangImg from "../../assets/Imgs/hang_man_game.png"
import Exchange from "../../assets/Imgs/Exchange.png"

function JavaScript() {
    return (
        <>
            <div className="project-list-item">
                <a href="https://todo-list-applicartion.netlify.app/" target="blank">
                    <img src={todoImg} />
                    <div className="project-info">
                        <h3>Todo list App</h3>
                        <p> More Details  <i className="uil uil-arrow-right"></i></p>

                    </div>
                </a>
            </div>
            <div className="project-list-item">
                <a href="https://quiz-app-practice-js.netlify.app/" target="blank">
                    <img src={quizImg} />
                    <div className="project-info">
                        <h3>Sample Quiz App</h3>
                        <p> More Details  <i className="uil uil-arrow-right"></i></p>

                    </div>
                </a>
            </div>
            <div className="project-list-item">
                <a href="https://hang-man-game-practice.netlify.app/" target="blank">
                    <img src={hangImg} />
                    <div className="project-info">
                        <h3>Hang Man Game</h3>
                        <p> More Details  <i className="uil uil-arrow-right"></i></p>
                    </div>
                </a>
            </div>

            <div className="project-list-item">
                <a href="https://ahadef2000.github.io/Exchange_app_practice/" target="blank">
                    <img src={Exchange} />
                    <div className="project-info">
                        <h3>Exchange App</h3>
                        <p> More Details  <i className="uil uil-arrow-right"></i></p>
                    </div>
                </a>
            </div>
        </>
    )
}

export default JavaScript