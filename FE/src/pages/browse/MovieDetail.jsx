import React, { useCallback, useEffect, useState } from "react";
import styles from "./MovieDetail.module.css";
//Tạo component để hiển thị thông tin phim được chọn
const MovieDetail = (props) => {
  const token = "RYoOcWM4JW";
  //lấy dữ liệu về trailer của bộ phim
  //state dữ liệu trả về
  const [videos, setVideos] = useState([]);

  const trailerFetch = useCallback((id) => {
    fetch(`http://localhost:5000/api/movies/video`, {
      method: "POST",
      headers: {
        authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movieId: id }),
    })
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((err) => alert(err));
  }, []);

  useEffect(() => {
    trailerFetch(props.movieid);
  }, [props.movieid]);

  // //Lọc ra các phần tử trong videos thỏa điều kiện
  // let videoYoutube = videos.filter(
  //   (video) =>
  //     video.site === "YouTube" &&
  //     (video.type === "Trailer" || video.type === "Teaser")
  // );

  // console.log(videoYoutube);

  return (
    <div className={styles.comstyle}>
      <div className={styles.leftdiv}>
        <p className={styles.namestyle}>
          {props.movieData.name ? props.movieData.name : props.movieData.title}
        </p>
        <hr />
        <p className={styles.datestyle}>
          Release Date:{" "}
          {props.movieData.first_air_date
            ? props.movieData.first_air_date
            : props.movieData.release_date}
        </p>
        <p className={styles.votestyle}>
          Vote: {props.movieData.vote_average}/10
        </p>
        <p className={styles.overviewstyle}>{props.movieData.overview}</p>
      </div>
      <div className={styles.rightdiv}>
        {/* Nếu mảng videoYoutube có video thì lấy video đầu tiên tìm được,
    nếu không có video nào thỏa mãn thì sẽ hiển thị ảnh Backdrop */}
        {videos.length == 0 && (
          <img
            src={`https://image.tmdb.org/t/p/w500${props.movieData.backdrop_path}`}
            alt="movieimage"
          />
        )}
        {videos.length > 0 && (
          <iframe
            width="45%"
            height="400"
            src={`https://www.youtube.com/embed/${videos[0].key}`}
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
