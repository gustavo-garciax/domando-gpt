function App() {
  return (
    <>
      <header>
        <h1>🍕Seja bem-vindo à OpenPizzaria!</h1>
        <p>
          As melhores pizzas, preparadas com carinho para deixar seu momento
          ainda mais saboroso.
        </p>
      </header>
      <hr />

      <section className="banner">
        <img
          src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&h=300"
          alt="Pizza da OpenPizzaria"
          width="1000"
          height="300"
        />
      </section>

      <section className="sobre-pizzaria">
        <article>
          <h1>Pizzas Artesanais</h1>
          <p>
            Na OpenPizzaria, preparamos pizzas artesanais com ingredientes
            selecionados, massa fresquinha e muito sabor. Escolha seu sabor
            favorito e aproveite cada pedaço!
          </p>
        </article>

        <article>
          <h1>Sabores para Todos</h1>
          <p>
            Do clássico ao especial, temos opções para todos os gostos. Reúna a
            família e os amigos e venha experimentar as deliciosas pizzas da
            OpenPizzaria!
          </p>
        </article>
      </section>
    </>
  );
}

export default App;
