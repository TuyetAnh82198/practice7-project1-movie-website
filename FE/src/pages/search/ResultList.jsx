import React, { useState, useRef, useEffect } from "react";

import MovieDetailSearch from "../browse/MovieDetailSearch.jsx";

import styles from "./ResultList.module.css";

//Tạo component hiển thị danh sách các kết quả của việc tìm kiếm
const ResultList = (props) => {
  //state bộ phim được chọn
  const [nextMovie, setNextMovie] = useState();
  //state id bộ phim được chọn để gán vào thuộc tính tùy chỉnh movieid của component MovieDetail
  const [movieid, setMovieId] = useState();
  //state ẩn/hiện component MovieDetail
  const [movieDetailState, setMovieDetailState] = useState(false);

  let currentMovie = useRef();
  //Tạo hàm để hiển thị thông tin cụ thể của phim; dùng cho sự kiện onClick của <img>
  const movieInfor = (movie) => {
    //nếu giá trị của currentMovie.current không bằng giá trị của bộ phim được chọn movie
    if (currentMovie.current !== movie) {
      //thì đổi trạng thái thành true, hiện component MovieDetail
      setMovieDetailState(true);
      //sau đó gán movie vào currentMovie.current và cập nhật state
      currentMovie.current = movie;
      setNextMovie(movie);
      setMovieId(movie.id);
      //nếu giá trị của currentMovie.current bằng giá trị của movie, là lần click tiếp theo người dùng đã click cùng một ảnh phim thay vì ảnh khác
    } else if (currentMovie.current === movie) {
      //thì đổi trạng thái của stateMovieDetail thành ngược lại để ẩn hoặc hiện component MovieDetail
      setMovieDetailState(!movieDetailState);
      currentMovie.current = movie;
      setNextMovie(movie);
      setMovieId(movie.id);
    }
  };
  useEffect(() => {
    console.log(currentMovie.current);
    console.log(nextMovie);
  }, [currentMovie.current, nextMovie]);

  return (
    <div className={styles.resultlist}>
      <p className={styles.searchresult}>Search Result</p>
      <div className={styles.imgs}>
        {props.moviearray.map((movie) => (
          <img
            onClick={() => movieInfor(movie)}
            className={styles.img}
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt="movieimage"
          />
        ))}
      </div>
      {movieDetailState && (
        <MovieDetailSearch movieData={nextMovie} movieid={movieid} />
      )}
    </div>
  );
};

export default ResultList;
