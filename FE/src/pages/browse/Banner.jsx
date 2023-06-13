import React, { useState, useEffect, useCallback } from "react";
import styles from "./Banner.module.css";

const Banner = (props) => {
  //state bộ phim dùng làm banner
  const [movie, setMovie] = useState({});
  //Tạo hàm lấy ngẫu nhiên thông tin của 1 bộ phim trong 20 bộ phim lấy từ API fetchNetflixOriginals để hiển thị lên Banner
  const token = "RYoOcWM4JW";

  const randomMovie = useCallback(() => {
    fetch(`http://localhost:5000/api/movies/trending`, {
      method: "GET",
      headers: { authorization: token },
    })
      .then((response) => response.json())
      .then((data) => {
        setMovie(
          data.results[Math.floor(Math.random() * data.results.length - 1)]
        );
        console.log(data.results);
      })
      .catch((err) => alert(err));
  }, []);
  // const randomMovie = useCallback(() => {
  //   fetch(`https://api.themoviedb.org/3${props.linkapi}`)
  //     .then((response) => response.json())
  //     .then((data) =>
  //       setMovie(
  //         data.results[Math.floor(Math.random() * data.results.length - 1)]
  //       )
  //     )
  //     .catch((err) => alert(err));
  // }, [props.linkapi]);

  //tìm nạp dữ liệu ngay sau khi tải trang, phía trên có thêm useCallback để không bị lặp vô hạn
  useEffect(() => {
    randomMovie();
  }, [randomMovie]);
  return (
    <div>
      <img
        className={styles.movieimg}
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt="movieimage"
      />
      <div className={styles.movieinfo}>
        <p className={styles.moviename}>
          {movie.name ? `${movie.name}` : `${movie.title}`}
        </p>
        <button className={styles.btn1}>Play</button>
        <button className={styles.btn2}>My List</button>
        <p className={styles.movieoverview}>{`${movie.overview}`}</p>
      </div>
    </div>
  );
};

export default Banner;
