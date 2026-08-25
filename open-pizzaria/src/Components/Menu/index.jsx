import { Link } from 'react-router-dom'
import './Menu.css'

const Menu = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>


                <li className="tem-submenu">
                    <Link to="/pizzas">Pizzas</Link>
                    <ul className="submenu">
                        <li><a href="#tradicionais">Tradicionais</a></li>
                        <li><a href="#especiais">Especiais da Casa</a></li>
                        <li><a href="#doces">Doces</a></li>
                    </ul>
                </li>

                <li className="tem-submenu">
                    <a href="#bebidas">Bebidas</a>
                    <ul className="submenu">
                        <li><a href="#refrigerantes">Refrigerantes</a></li>
                        <li><a href="#sucos">Sucos Naturais</a></li>
                        <li><a href="#cervejas">Cervejas</a></li>
                    </ul>
                </li>

                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
        </nav>
    )
}

export default Menu