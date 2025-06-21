import "./navBar.css";

export default function NavBar() {
    return (
        <nav className="nav-bar">
            <ul className="item-container">
                <li className="item">
                    <a href="#section1">Inicio</a>
                </li>
                <li className="item">
                    <a href="#section2">Sobre mí</a>
                </li>
                <li className="item">
                    <a href="#section3">Proyectos</a>
                </li>
                <li className="item">
                    <a href="#section4">Contactame</a>
                </li>
            </ul>
        </nav>
    );
}
