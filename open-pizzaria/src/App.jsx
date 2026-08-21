import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Cards from "./Components/Cards";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import "./Global.css";
import FeedBack from "./Components/FeedBack";


function App() {
  return (
    <div className="container">


      <Header titleHeader="🍕Seja bem-vindo à OpenPizzaria!" 
      textHeader="As melhores pizzas, preparadas com carinho para deixar seu momento ainda mais saboroso." />

      <Menu />

      <Banner />

      <Cards />

      <FeedBack />

      <FeedBack />

      <Footer titleFooter="OpenPizzaria - todos os direitos reservados - 2026"/>

    </div>
  );
}

export default App;
