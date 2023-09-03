import React, { useEffect, useState } from "react";
import Categories from "../../components/UI/Categories/Categories";
import Sort from "../../components/UI/Sort/Sort";
import PizzaBlock from "../../components/UI/PizzaBlock.jsx/PizzaBlock";
import Skeleton from "../../components/UI/Skeleton/Skeleton";
import { SearchContext } from "../../App";
import Pagination from "../../components/UI/Pagination";

import { useSelector, useDispatch } from "react-redux";
import { setSortType } from "../../redux/slices/sortSlice";
import { setActiveCatIndex } from "../../redux/slices/filterSlice";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const { searchValue } = React.useContext(SearchContext);

  const sortType = useSelector((store) => store.sort.sortType);
  const activeCatIndex = useSelector((store) => store.filter.activeCatIndex);
  const dispatch = useDispatch();

  const fetchCategoryIndex =
    activeCatIndex > 0 ? "category=" + activeCatIndex + "&" : "";
  const sortOrder = sortType.order.includes("-") ? "desc" : "asc";
  const sortProperty = sortType.order.replace("-", "");
  const search = `&search=${searchValue}`;
  const currPage = `&page=${currentPage}`;
  const itemsPerPage = 4;
  const allItemsQuantity = 10;
  const iPerPage = `&limit=${itemsPerPage}`;

  const fetchPizzas = () => {
    setIsLoading(false);

    try {
      fetch(
        `https://64db6924593f57e435b0ec78.mockapi.io/pizzas?` +
          fetchCategoryIndex +
          "sortBy=" +
          sortProperty +
          "&order=" +
          sortOrder +
          search +
          currPage +
          iPerPage
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
    dispatch(setSortType(sortType));
  };

  useEffect(() => {
    fetchPizzas();
  }, [activeCatIndex, sortType, searchValue, currPage]);
  return (
    <>
      <div className="content__top">
        <Categories
          activeCatIndex={activeCatIndex}
          onCatClick={(index) => dispatch(setActiveCatIndex(index))}
        />
        <Sort sortType={sortType} onSortClick={fetchSort} />
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
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        allItemsQuantity={allItemsQuantity}
      />
    </>
  );
};

export default Home;
