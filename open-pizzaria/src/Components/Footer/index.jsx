import './Footer.css'

const Footer = (props) => {
    return (
<footer class="footer">
    <div class="footer-container">

        <div class="footer-brand">
            <h2>{props.titleFooter}</h2>
            <p>
                Sabor, qualidade e aquele toque especial
                em cada pizza.
            </p>
        </div>

        <div class="footer-section">
            <h3>Links</h3>
            <a href="#">Início</a>
            <a href="#">Cardápio</a>
            <a href="#">Sobre nós</a>
            <a href="#">Contato</a>
        </div>

        <div class="footer-section">
            <h3>Contato</h3>
            <p>📍 São Paulo - SP</p>
            <p>📞 (11) 99999-9999</p>
            <p>✉️ contato@openpizzaria.com</p>
        </div>

        <div class="footer-section">
            <h3>Redes sociais</h3>
            <div class="social-links">
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">WhatsApp</a>
            </div>
        </div>

    </div>

    <div class="footer-bottom">
        <p>© 2026 OpenPizzaria. Todos os direitos reservados.</p>
        <p>Feito com ❤️ e muita pizza 🍕</p>
    </div>
</footer>
    )
}

export default Footer