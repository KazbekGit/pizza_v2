import React from "react";

const Categories = ({activeCatIndex, onCatClick}) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  
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
