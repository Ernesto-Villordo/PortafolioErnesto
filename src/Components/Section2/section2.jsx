import "./section2.css";
import { iconos } from "../Data/iconos";
import React from "react";

export default function Section2() {
    function Tecnologias({ tecnologias }) {
        const tecnologiasFiltradas = iconos.filter(({ id }) => tecnologias.includes(id));
        return (
            <ul className="lista-habilidades">
                <li className="item-tecnologia">
                    {tecnologiasFiltradas.map(({ id, path }) => (
                        <div key={id} className="icono-contenedor">
                            <img className="icono-image" src={path}></img>
                            <p>{id}</p>
                        </div>
                    ))}
                </li>
            </ul>
        );
    }

    return (
        <section id="section2">
            <h2 className="subtitle-2">
                Sobre <strong className="colored">mí</strong>
            </h2>

            <div className="contenedor-sobre-mi">
                <div className="historia">
                    <img src="" alt="Ernesto Villordo" className="foto"></img>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
                        perspiciatis mollitia dolorum, accusamus ipsum ipsam optio reprehenderit
                        quas libero voluptates nostrum ab a veritatis, cupiditate rerum veniam, vero
                        incidunt ad.
                    </p>
                    <div className="redes">
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-github"></i>
                    </div>
                </div>
                <div className="habilidades">
                    <h2 className="subtitulo-habilidades">
                        Herramientas que uso con <strong className="colored">frecuencia</strong>
                    </h2>
                    <Tecnologias
                        tecnologias={[
                            "Html",
                            "Css",
                            "JavaScript",
                            "React",
                            "Tailwind",
                        ]}></Tecnologias>
                    <h2 className="subtitulo-habilidades">
                        Herramientas que estoy <strong className="colored">aprendiendo</strong>
                    </h2>
                    <Tecnologias
                        tecnologias={["Next", "Css", "Html", "JavaScript", "React"]}></Tecnologias>
                    <h2 className="subtitulo-habilidades">
                        <strong className="colored">Otras</strong> herramientas
                    </h2>
                    <Tecnologias
                        tecnologias={["Next", "Css", "Html", "JavaScript", "React"]}></Tecnologias>
                </div>
            </div>
        </section>
    );
}
