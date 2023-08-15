import React, { useState } from "react";

const Categories = () => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const onCatClick = (index) => {
    setActiveCatIndex(index)
  }
  const [activeCatIndex, setActiveCatIndex] = useState(0);
  return (
    <div className="categories">
      <ul>
        {categories.map((cat, index) => {
          return <li onClick={() => onCatClick(index)} className={index === activeCatIndex ? "active" : ""} key={cat}>{cat}</li>;
        })}
      </ul>
    </div>
  );
};

export default Categories;
