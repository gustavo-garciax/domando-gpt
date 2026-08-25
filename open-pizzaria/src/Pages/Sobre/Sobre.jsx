import React from 'react'
import './Sobre.css'

export default function Sobre() {
  return (
    <main className="sobre">
      <div className="sobre-container">

        <header className="sobre-header">
          <span>🍕 Desde 2010</span>

          <h1>OpenPizzaria</h1>

          <p>
            Muito mais que pizza. Uma experiência feita para compartilhar
            momentos, sabores e histórias.
          </p>
        </header>

        <dl className="sobre-lista">

          <div>
            <dt>🍕 Nossa História</dt>
            <dd>
              Nossa pizzaria nasceu da paixão por pizzas artesanais.
              Começamos pequenos e conquistamos nossos clientes através
              de receitas especiais e muito carinho.
            </dd>
          </div>

          <div>
            <dt>👨‍🍳 Nossa Cozinha</dt>
            <dd>
              Nossa equipe prepara cada pizza cuidadosamente, respeitando
              o tempo da massa e valorizando cada ingrediente.
            </dd>
          </div>

          <div>
            <dt>🌿 Ingredientes</dt>
            <dd>
              Trabalhamos com ingredientes frescos e selecionados para
              entregar sabor e qualidade em cada pedaço.
            </dd>
          </div>

          <div>
            <dt>⭐ Nossa Especialidade</dt>
            <dd>
              Pizzas tradicionais, sabores exclusivos da casa e deliciosas
              opções doces para fechar a noite com chave de ouro.
            </dd>
          </div>

          <div>
            <dt>❤️ Nosso Compromisso</dt>
            <dd>
              Queremos que cada cliente saia daqui pensando:
              <strong>“Eu preciso voltar!”</strong>
            </dd>
          </div>

          <div>
            <dt>👨‍👩‍👧‍👦 Para Toda a Família</dt>
            <dd>
              Um ambiente pensado para encontros, comemorações,
              reuniões familiares e aquela pizza especial de sexta-feira.
            </dd>
          </div>

          <div>
            <dt>🕐 Horário de Funcionamento</dt>
            <dd>
              <strong>Terça a quinta:</strong> 18h às 22h30<br />
              <strong>Sexta e sábado:</strong> 18h às 23h30<br />
              <strong>Domingo:</strong> 18h às 22h
            </dd>
          </div>

          <div>
            <dt>📍 Localização</dt>
            <dd>
              Rua das Pizzas, 123<br />
              Centro — São Paulo, SP
            </dd>
          </div>

          <div>
            <dt>📞 Faça seu Pedido</dt>
            <dd>
              Está com vontade de comer uma pizza deliciosa?
              <br />

              <a href="#contato">
                Fazer meu pedido 🍕
              </a>
            </dd>
          </div>

        </dl>

      </div>
    </main>
  )
}