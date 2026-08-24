import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import Router from "./Router";
import "./Global.css";



function App() {
  return (
    <div className="container">


      <Header titleHeader="🍕Seja bem-vindo à OpenPizzaria!" 
      textHeader="As melhores pizzas, preparadas com carinho para deixar seu momento ainda mais saboroso." />

      <Router />

      <Footer titleFooter="OpenPizzaria - todos os direitos reservados - 2026"/>

    </div>
  );
}

export default App;
