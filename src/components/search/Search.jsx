import React from "react";
import { Link } from "react-router-dom";

const Search = ({ filterData, searchValue }) => {
  let searchItem = filterData?.slice(0, 5)?.map((el) => (
    <div key={el.id} className="search__content">
      <img src={el.url[0]} alt={el.title} />
      <Link to={`/products/${el.id}`}>{el.title}</Link>
    </div>
  ));

  return (
    <div>
      {searchValue.trim() ? (
        <div className="search"> {searchItem} </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Search;
