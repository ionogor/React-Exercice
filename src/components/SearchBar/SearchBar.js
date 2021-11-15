import React from "react";
import "./SearchBar.css";

const Search = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          style={{ height: "30px", width: "30px" }}
          src="https://img.icons8.com/ios/2x/instagram-new.png"
        ></img>
        <input type="text" placeholder="Search"></input>

        <div className="icon-wrapper">
          <img
            style={{ height: "30px", width: "30px" }}
            src="https://img.icons8.com/material-outlined/2x/compass.png"
          ></img>
          <img
            style={{ height: "30px", width: "30px" }}
            src="https://img.icons8.com/material-outlined/2x/like.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Search;
