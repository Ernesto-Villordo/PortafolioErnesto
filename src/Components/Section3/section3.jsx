import "./section3.css";
import { proyectos } from "../Data/proyectos";
import { iconos } from "../Data/iconos";

export default function Section3() {
    function RenderizarProyectos({ proyecto }) {
        const tecnologiasFiltradas = iconos.filter(({ id }) => proyecto.tecnologias?.includes(id));
        return (
            <>
                <div key={proyectos.id} className="proyecto-aux">
                    <img src={proyecto.imagen} alt={proyecto.id} className="imagen-proyecto" />
                    <div class="contenedor-descripcion">
                        <h3 class="titulo-proyecto"> {proyecto.id}</h3>
                        <ul class="tecnologias-proyectos">
                            <li class="item-proyecto">
                                <p class="texto-proyecto">{proyecto.descripcion}</p>
                                {tecnologiasFiltradas.map(({ id, path }) => (
                                    <div key={id} className="icono-contenedor">
                                        <img className="icono-proyecto-imagen" src={path}></img>
                                    </div>
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }

    return (
        <section id="section3">
            <h1 class="subtitle-2">
                Algunos de mis <strong className="colored">proyectos</strong>
            </h1>
            <div class="proyectos-container">
                {proyectos.map((iteracionProyecto) => (
                    <RenderizarProyectos key={iteracionProyecto.id} proyecto={iteracionProyecto} />
                ))}
            </div>
        </section>
    );
}
