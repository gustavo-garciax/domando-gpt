import './Menu.css'

const Menu = () => {
    return (
        <nav>
            <ul>
                <li><a href="#inicio">Início</a></li>

                <li class="tem-submenu">
                    <a href="#pizzas">Pizzas</a>
                    <ul class="submenu">
                        <li><a href="#tradicionais">Tradicionais</a></li>
                        <li><a href="#especiais">Especiais da Casa</a></li>
                        <li><a href="#doces">Doces</a></li>
                    </ul>
                </li>

                <li class="tem-submenu">
                    <a href="#bebidas">Bebidas</a>
                    <ul class="submenu">
                        <li><a href="#refrigerantes">Refrigerantes</a></li>
                        <li><a href="#sucos">Sucos Naturais</a></li>
                        <li><a href="#cervejas">Cervejas</a></li>
                    </ul>
                </li>

                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    )
}

export default Menu