import React, { useEffect, useState } from "react";
import Categories from "../../components/UI/Categories/Categories";
import Sort from "../../components/UI/Sort/Sort";
import PizzaBlock from "../../components/UI/PizzaBlock.jsx/PizzaBlock";
import Skeleton from "../../components/UI/Skeleton/Skeleton";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [activeCatIndex, setActiveCatIndex] = useState(0);

  const [sortTypeIndex, setSortTypeIndex] = useState(0);

  const fetchCategoryIndex =
    activeCatIndex > 0 ? "category=" + activeCatIndex : "";
  
  const fetchPizzas = () => {
    try {
      fetch(
        `https://64db6924593f57e435b0ec78.mockapi.io/pizzas?` +
          fetchCategoryIndex
      )
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
  }, [activeCatIndex]);
  return (
    <>
      <div className="content__top">
        <Categories
          activeCatIndex={activeCatIndex}
          onCatClick={(index) => setActiveCatIndex(index)}
        />
        <Sort
          sortTypeIndex={sortTypeIndex}
          onSortClick={(index) => setSortTypeIndex(index)}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(pizzas.length)].map((_, index) => {
              return <Skeleton key={index} />;
            })
          : pizzas.map((pizza) => {
              return <PizzaBlock {...pizza} key={pizza.id} />;
            })}
      </div>
    </>
  );
};

export default Home;
