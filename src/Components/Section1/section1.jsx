import "./section1.css";
import { iconos } from "../Data/iconos";

export default function Section1() {
    return (
        <section id="section1">
            <div className="container-info">
                <h2 className="subtitle">Hola! Me llamo</h2>
                <div className="title-container">
                    <h1> {"<"} </h1>
                    <h1 className="title"> Ernesto Villordo </h1>
                    <h1> {"/>"} </h1>
                </div>
                <p className="presentacion">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat doloremque
                    odio voluptatem? Eligendi modi, suscipit dolores dicta nisi dignissimos iusto
                    assumenda. Nostrum dicta architecto nam harum iure commodi? Suscipit, maiores!
                </p>
                <div className="container-cv">
                    <a href="" className="cv">
                        Descargar CV
                    </a>
                    <i className="bx  bx-arrow-big-down-line"></i>
                </div>
            </div>
            <div className="container-image">
                <a>
                    <img
                        className="img"
                        src="https://i.ibb.co/vnM26zx/Copilot-20250615-212516.png"
                        alt="Copilot-20250615-212516"></img>
                </a>
                {iconos
                    .filter(({ id }) => ["Html", "Css", "JavaScript", "React"].includes(id))
                    .map(({ id, path, className }) => (
                        <img key={id} className={className} src={path}></img>
                    ))}
            </div>
        </section>
    );
}
