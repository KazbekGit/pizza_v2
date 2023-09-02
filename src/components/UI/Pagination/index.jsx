import React from "react";

const Pagination = ({
  itemsPerPage,
  allItemsQuantity,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <ul className="pagesList">
      {[...new Array(Math.ceil(allItemsQuantity / itemsPerPage))].map(
        (_, index) => {
          return (
            <li
              onClick={() => setCurrentPage(index + 1)}
              className={(currentPage === index + 1 ? "activePage" : "")}
              key={index}
            >
              {index + 1}
            </li>
          );
        }
      )}
    </ul>
  );
};

export default Pagination;
