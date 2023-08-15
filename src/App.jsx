import Header from "./components/UI/Header/Header";
import Categories from "./components/UI/Categories/Categories";
import Sort from "./components/UI/Sort/Sort";
import PizzaBlock from "./components/UI/PizzaBlock.jsx/PizzaBlock";
import  pizzas  from "../src/data/pizzas.json";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {pizzas.map((pizza) => {
            return <PizzaBlock {...pizza} key={pizza.id}/>    
          })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
