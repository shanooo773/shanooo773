import React from "react";
import "./SearchComponent.css";
import Searchuser from "./Searchuser";
const SearchComponent = () => {
  return (
    <div className="searchcontainer">
      <div className="px-3 pb-5">
        <h1 className="text-xl pb-5 text-start">Search</h1>
        <input className="searchinput" type="text" placeholder="Search...." />
      </div>
      <hr />
      <div className="px-3 pt-5">
        {[1,1,1,,1,1,1,,1,1].map((item)=><Searchuser/>)}
      </div>
    </div>
  );
};

export default SearchComponent;
