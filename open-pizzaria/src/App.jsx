import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import "./Global.css";
import Menu from "./Components/Menu";

function App() {
  return (
    <div className="container">


      <Header titleHeader="🍕Seja bem-vindo à OpenPizzaria!" 
      textHeader="As melhores pizzas, preparadas com carinho para deixar seu momento ainda mais saboroso." />

      <Menu />

      <Banner />

      <Cards />

      <Footer titleFooter="OpenPizzaria - todos os direitos reservados - 2026"/>

    </div>
  );
}

export default App;
