import React, { useEffect, useState } from "react";
import Header from "./components/UI/Header/Header";
import Categories from "./components/UI/Categories/Categories";
import Sort from "./components/UI/Sort/Sort";
import PizzaBlock from "./components/UI/PizzaBlock.jsx/PizzaBlock";
import Skeleton from "./components/UI/Skeleton/Skeleton";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPizzas = () => {
    try {
      fetch("https://64db6924593f57e435b0ec78.mockapi.io/pizzas")
        .then((res) => res.json())
        .then((json) => setPizzas(json));
    } catch (err) {
      console.warn(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

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
            {isLoading
              ? [...new Array(pizzas.length)].map((_, index) => {
                  return <Skeleton key={index}/>;
                })
              : pizzas.map((pizza) => {
                  return <PizzaBlock {...pizza} key={pizza.id} />;
                })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
