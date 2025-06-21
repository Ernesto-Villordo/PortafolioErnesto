import "./section4.css";

export default function Section4() {
    return (
        <section id="section4">
            <div class="contactame-container">
                <i class="icono-enviar fa-solid fa-envelope"></i>
                <h2 class="subtitle-2 tamaño-subtitulo">
                    Mandame un <strong className="colored">mensaje!</strong>
                </h2>
                <form class="formulario" action="https://formsubmit.co/27f3ae344ce7a2e20350ef">
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Ingresa tu nombre asi se con quien hablo"
                        required></input>
                    <input
                        type="email"
                        name="email"
                        placeholder="Ingresa tu email para mantenernos en contacto"
                        required></input>
                    <textarea name="mensaje" placeholder="Dejame tu opinion!" required></textarea>
                    <button type="submit">Enviar mensaje</button>
                </form>
            </div>
        </section>
    );
}
