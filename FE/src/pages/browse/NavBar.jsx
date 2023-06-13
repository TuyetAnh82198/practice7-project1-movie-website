//Tạo component NavBar để xây dựng giao diện bao gồm phần chữ "Movie App" và nút Search
import React, { useState } from "react";
import styles from "./NarBar.module.css";

//Tạo hàm để chuyển về trang chủ dùng cho sự kiện onClick của thẻ p với nội dung "Movie App"
const backToHomePage = () => {
  window.location.replace("/");
};

//Tạo hàm để chuyển về trang tìm kiếm dùng cho sự kiện onClick của nút Search tạo bởi thẻ svg
const backToSearchPage = () => {
  window.location.replace("/search");
};

const NavBar = () => {
  //state màu nền Navbar
  const [color, setColor] = useState();
  //Bắt sự kiện scroll của Window
  window.addEventListener("scroll", function () {
    //nếu như window.scrollY lớn hơn 100px thì dùng class nền đen cho thẻ div
    if (window.scrollY > 100) {
      setColor(styles.blackbackground);
    }
    //nếu window.scrollY không lớn hơn 100px thì dùng class nền trong cho thẻ div
    else {
      setColor(styles.transparent);
    }
  });
  return (
    <div className={color}>
      <div className={styles.thetwotags}>
        <p className={styles.movieapp} onClick={backToHomePage}>
          Movie App
        </p>

        <svg
          className={`svg-inline--fa fa-search fa-w-16 ${styles.btnsearch}`}
          fill="#ccc"
          aria-hidden="true"
          data-prefix="fas"
          data-icon="search"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          onClick={backToSearchPage}
        >
          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
      </div>
    </div>
  );
};

export default NavBar;
