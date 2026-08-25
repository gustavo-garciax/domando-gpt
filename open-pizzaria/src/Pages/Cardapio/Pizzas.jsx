import React from 'react'
import './Pizzas.css'

export default function () {
  return (
  <main>
            <header>
                <h1>OpenPizzaria</h1>
                <p>As melhores pizzas da cidade</p>
            </header>

            <section>
                <h2>Nosso Cardápio</h2>

                <div className="pizza-grid">

                    <article className="pizza-card">
                        <div className="pizza-image">
                            <img
                                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
                                alt="Pizza Margherita"
                            />
                        </div>

                        <div className="pizza-content">
                            <h3>Margherita</h3>
                            <p>Molho de tomate, muçarela, tomate e manjericão.</p>

                            <div className="pizza-bottom">
                                <strong>R$ 39,90</strong>
                                <button>Pedir</button>
                            </div>
                        </div>
                    </article>

                    <article className="pizza-card">
                        <div className="pizza-image">
                            <img
                                src="https://images.unsplash.com/photo-1579751626657-72bc17010498"
                                alt="Pizza Calabresa"
                            />
                        </div>

                        <div className="pizza-content">
                            <h3>Calabresa</h3>
                            <p>Muçarela, calabresa, cebola e molho de tomate.</p>

                            <div className="pizza-bottom">
                                <strong>R$ 42,90</strong>
                                <button>Pedir</button>
                            </div>
                        </div>
                    </article>

                    <article className="pizza-card">
                        <div className="pizza-image">
                            <img
                                src="https://blog.fornettostore.com.br/wp-content/uploads/2025/03/blog-receita-frango-catupiry.jpg"
                                alt="Pizza Frango com Catupiry"
                            />
                        </div>

                        <div className="pizza-content">
                            <h3>Frango com Catupiry</h3>
                            <p>Frango desfiado, muçarela e catupiry.</p>

                            <div className="pizza-bottom">
                                <strong>R$ 44,90</strong>
                                <button>Pedir</button>
                            </div>
                        </div>
                    </article>

                    <article className="pizza-card">
                        <div className="pizza-image">
                            <img
                                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
                                alt="Pizza Quatro Queijos"
                            />
                        </div>

                        <div className="pizza-content">
                            <h3>Quatro Queijos</h3>
                            <p>Muçarela, provolone, parmesão e catupiry.</p>

                            <div className="pizza-bottom">
                                <strong>R$ 49,90</strong>
                                <button>Pedir</button>
                            </div>
                        </div>
                    </article>

                    <article className="pizza-card">
                        <div className="pizza-image">
                            <img
                                src="https://alloydeliveryimages.s3.sa-east-1.amazonaws.com/item_images/6802/688b954f02343sxoop.webp"
                                alt="Pizza Open Especial"
                            />
                        </div>

                        <div className="pizza-content">
                            <h3>Open Especial</h3>
                            <p>Muçarela, calabresa, bacon, frango e catupiry.</p>

                            <div className="pizza-bottom">
                                <strong>R$ 54,90</strong>
                                <button>Pedir</button>
                            </div>
                        </div>
                    </article>

                    <article className="pizza-card">
                        <div className="pizza-image">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-JQXRXKX1OuvxN76jkhk6I0jrK_GRJV-yGA9vw3dgqzI2_l_WiTS7FeL&s=10"
                                alt="Pizza de Chocolate"
                            />
                        </div>

                        <div className="pizza-content">
                            <h3>Chocolate</h3>
                            <p>Chocolate ao leite, morango e granulado.</p>

                            <div className="pizza-bottom">
                                <strong>R$ 39,90</strong>
                                <button>Pedir</button>
                            </div>
                        </div>
                    </article>

                </div>
            </section>
        </main>
    );
}

