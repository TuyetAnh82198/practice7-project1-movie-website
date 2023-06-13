import React from "react";

import NavBar from "./NavBar.jsx";
import Banner from "./Banner.jsx";
import MovieList from "./MovieList.jsx";

//Các đường link cần dùng của API
const requests = {
  // fetchTrending: `/trending/all/week?api_key=b96d917db4e811cda60de6da46080907&language=en-US`,
  // fetchNetflixOriginals: `/discover/tv?api_key=b96d917db4e811cda60de6da46080907&with_network=123`,
  // fetchTopRated: `/movie/top_rated?api_key=b96d917db4e811cda60de6da46080907&language=en-US`,
  // fetchActionMovies: `/discover/movie?api_key=b96d917db4e811cda60de6da46080907&with_genres=28`,
  // fetchComedyMovies: `/discover/movie?api_key=b96d917db4e811cda60de6da46080907&with_genres=35`,
  // fetchHorrorMovies: `/discover/movie?api_key=b96d917db4e811cda60de6da46080907&with_genres=27`,
  // fetchRomanceMovies: `/discover/movie?api_key=b96d917db4e811cda60de6da46080907&with_genres=10749`,
  // fetchDocumentaries: `/discover/movie?api_key=b96d917db4e811cda60de6da46080907&with_genres=99`,
  fetchSearch: `/search/movie?api_key=b96d917db4e811cda60de6da46080907&language=en-US`,
};

function Browse() {
  return (
    <React.Fragment>
      <NavBar />
      <Banner />
      <MovieList
      // linkapioriginal={requests.fetchNetflixOriginals}
      // linkapitrending={requests.fetchTrending}
      // linkapitoprated={requests.fetchTopRated}
      // linkapiaction={requests.fetchActionMovies}
      // linkapicomedy={requests.fetchComedyMovies}
      // linkapihorror={requests.fetchHorrorMovies}
      // linkapiromance={requests.fetchRomanceMovies}
      // linkapidoc={requests.fetchDocumentaries}
      />
    </React.Fragment>
  );
}

export default Browse;
