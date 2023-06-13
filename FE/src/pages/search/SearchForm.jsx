import React, { useState, useCallback, useEffect, useRef } from "react";

import ResultList from "./ResultList.jsx";

import styles from "./SearchForm.module.css";

//Tạo component hiển thị form để nhập liệu và tìm kiếm
const SearchForm = () => {
  const token = "RYoOcWM4JW";
  //state ẩn/hiện component ResultList
  const [resultState, setResultState] = useState(false);

  //dùng useRef lưu trữ giá trị nhập vào
  const keywordinput = useRef();
  //state dữ liệu trả về
  const [searchedMovies, setSearchedMovies] = useState([]);

  //Tạo hàm lấy dữ liệu từ giá trị được nhập ở trường input text; gán vào onSubmit của <form> và onClick của biểu tượng tìm kiếm
  const searchingMovie = (event) => {
    //chặn việc gửi dữ liệu mặc định
    event.preventDefault();
    //nếu trường nhập trống thì không gửi dữ liệu
    if (keywordinput.current.value.trim() === "") {
      return;
    }
    fetch(`http://localhost:5000/api/movies/search`, {
      method: "POST",
      headers: {
        authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ keyWordInput: keywordinput.current.value }),
    })
      .then((response) => response.json())
      .then((data) => {
        setSearchedMovies(data.results);
      })
      .catch((err) => alert(err));
    console.log(keywordinput.current.value);
    keywordinput.current.value = "";
    setResultState(true);
    // console.log(searchedMovies);
  };

  useEffect(() => console.log(searchedMovies), [searchedMovies]);

  return (
    <React.Fragment>
      <form onSubmit={searchingMovie} className={styles.formstyle}>
        <div className={styles.abovediv}>
          <input
            className={styles.inputtext}
            type="text"
            placeholder="batman"
            ref={keywordinput}
          ></input>
          <svg
            onClick={searchingMovie}
            className={`svg-inline--fa fa-search fa-w-16 ${styles.btnsearch}`}
            fill="#ccc"
            aria-hidden="true"
            data-prefix="fas"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
        </div>
        <div className={styles.belowdiv}>
          <button onClick={() => window.location.replace("/search")}>
            RESET
          </button>
          <input
            className={styles.inputsubmit}
            type="submit"
            value="SEARCH"
          ></input>
        </div>
      </form>
      {resultState && <ResultList moviearray={searchedMovies} />}
    </React.Fragment>
  );
};

export default SearchForm;
