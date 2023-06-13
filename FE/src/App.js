//Các comments nằm ở các file App.js, NavBar.jsx, Browse.jsx, Banner.jsx,
//MovieList.jsx, MovieDetail.jsx, SearchForm.jsx, ResultList.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Browse from "./pages/browse/Browse";
import Search from "./pages/search/Search";

function App() {
  return (
    //sau khi cài đặt react-router-dom, dùng BrowserRouter, Routes và Route để di chuyển qua lại giữa các trang
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
