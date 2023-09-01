import React, { useEffect, useState } from "react";
import Categories from "../../components/UI/Categories/Categories";
import Sort from "../../components/UI/Sort/Sort";
import PizzaBlock from "../../components/UI/PizzaBlock.jsx/PizzaBlock";
import Skeleton from "../../components/UI/Skeleton/Skeleton";
import { SearchContext } from "../../App";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { searchValue } = React.useContext(SearchContext);
  const [activeCatIndex, setActiveCatIndex] = useState(0);
  
  const [sortType, setSortType] = useState({
    order: "rating", title: "популярности(max)"
  });
  
  const fetchCategoryIndex =
  activeCatIndex > 0 ? "category=" + activeCatIndex + "&" : "";
  const sortOrder = sortType.order.includes("-") ? "desc" : "asc" 
  const sortProperty = sortType.order.replace("-", "");
  const search = `&search=${searchValue}`
  console.log(search)
  
  const fetchPizzas = () => {
    setIsLoading(false);
    
    try {
      fetch(
        `https://64db6924593f57e435b0ec78.mockapi.io/pizzas?` +
          fetchCategoryIndex + "sortBy=" + sortProperty + "&order=" + sortOrder + search
      )
        .then((res) => res.json())
        .then((json) => setPizzas(json));
    } catch (err) {
      console.warn(err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSort = (sortType) => {
    setSortType(sortType)
  }

  useEffect(() => {
    fetchPizzas();
  }, [activeCatIndex, sortType, searchValue]);
  return (
    <>
      <div className="content__top">
        <Categories
          activeCatIndex={activeCatIndex}
          onCatClick={(index) => setActiveCatIndex(index)}
        />
        <Sort
          sortType={sortType}
          onSortClick={fetchSort}
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
