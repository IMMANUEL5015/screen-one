import React, { useState } from "react";
import filerIcon from "../assets/images/filter_icon.png";
import searchIcon from "../assets/images/search_icon.png";

const ToolBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="tool-bar">
      <div className="input-text">
        <input type="text" />
        <img src={searchIcon} alt="search" />
      </div>
      <div className="filter-sec">
        <img
          onClick={() => {
            setToggle(!toggle);
          }}
          src={filerIcon}
          alt="filter"
        />
      </div>
      {toggle && (
        <div className="dropdown">
          <div>
            General History{" "}
            <span
              className={toggle ? "dropdown-active" : "dropdown-off"}
            ></span>{" "}
          </div>
          <div>
            Loan History{" "}
            <span
              className={toggle ? "dropdown-active" : "dropdown-off"}
            ></span>{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolBar;
