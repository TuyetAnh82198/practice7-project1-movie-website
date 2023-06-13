import React from "react";
import NavBar from "../browse/NavBar.jsx";
import SearchForm from "./SearchForm.jsx";

import styles from "./Search.module.css";

const Search = () => {
  return (
    <React.Fragment>
      <NavBar />
      <SearchForm />
    </React.Fragment>
  );
};

export default Search;
