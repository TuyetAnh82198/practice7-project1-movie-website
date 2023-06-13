import React, { useCallback, useEffect, useState, useRef } from "react";

import MovieDetail from "./MovieDetail.jsx";
import MovieDetailPoster from "./MovieDatailPoster.jsx";

import styles from "./MovieList.module.css";

//component hiển thị danh sách phim theo danh mục
const MovieList = (props) => {
  const token = "RYoOcWM4JW";
  //state dữ liệu phim lấy được theo danh mục lần lượt là Original, Xu hướng, Xếp hạng cao, Hành động, Hài, Kinh dị, Lãng mạn, Tài liệu
  const [originalmovies, setOriginalmovies] = useState([]);
  const [trendingmovies, setTrendingmovies] = useState([]);
  const [topratedmovies, setTopratedmovies] = useState([]);
  const [actionmovies, setActionmovies] = useState([]);
  const [comedymovies, setComedylmovies] = useState([]);
  const [horrormovies, setHorrormovies] = useState([]);
  const [romancemovies, setRomancemovies] = useState([]);
  const [documentaries, setDocumentaries] = useState([]);

  //Tạo hàm lấy phim theo từng danh mục từ API tương ứng

  //danh mục Original
  const originalmovieFetch = useCallback(() => {
    fetch(`http://localhost:5000/api/movies/discover/Science%20Fiction`, {
      method: "GET",
      headers: { authorization: token },
    })
      .then((response) => response.json())
      .then((data) => setOriginalmovies(data.results))
      .catch((err) => alert(err));
  }, []);
  //tìm nạp dữ liệu ngay sau khi tải trang, phía trên có thêm useCallback để không bị lặp vô hạn
  useEffect(() => {
    originalmovieFetch();
  }, [originalmovieFetch]);

  //danh mục Xu hướng
  const trendingmovieFetch = useCallback(() => {
    fetch(`http://localhost:5000/api/movies/trending`, {
      method: "GET",
      headers: { authorization: token },
    })
      .then((response) => response.json())
      .then((data) => setTrendingmovies(data.results))
      .catch((err) => alert(err));
  }, []);
  //tìm nạp dữ liệu ngay sau khi tải trang, phía trên có thêm useCallback để không bị lặp vô hạn
  useEffect(() => {
    trendingmovieFetch();
  }, [trendingmovieFetch]);

  //danh mục Xếp hạng cao
  const topratedmovieFetch = useCallback(() => {
    fetch(`http://localhost:5000/api/movies/top-rate`, {
      method: "GET",
      headers: { authorization: token },
    })
      .then((response) => response.json())
      .then((data) => setTopratedmovies(data.results))
      .catch((err) => alert(err));
  }, []);
  //tìm nạp dữ liệu ngay sau khi tải trang, phía trên có thêm useCallback để không bị lặp vô hạn
  useEffect(() => {
    topratedmovieFetch();
  }, [topratedmovieFetch]);

  //danh mục Hành động
  const actionmovieFetch = useCallback(() => {
    fetch(`http://localhost:5000/api/movies/discover/Action`, {
      method: "GET",
      headers: { authorization: token },
    })
      .then((response) => response.json())
      .then((data) => setActionmovies(data.results))
      .catch((err) => alert(err));
  }, []);
  //tìm nạp dữ liệu ngay sau khi tải trang, phía trên có thêm useCallback để không bị lặp vô hạn
  useEffect(() => {
    actionmovieFetch();
  }, [actionmovieFetch]);

  //danh mục Hài
  const comedymovieFetch = useCallback(() => {
    fetch(`http://localhost:5000/api/movies/discover/Comedy`, {
      method: "GET",
      headers: { authorization: token },
    })
      .then((response) => response.json())
      .then((data) => setComedylmovies(data.results))
      .catch((err) => alert(err));
  }, []);
  //tìm nạp dữ liệu ngay sau khi tải trang, phía trên có thêm useCallback để không bị lặp vô hạn
  useEffect(() => {
    comedymovieFetch();
  }, [comedymovieFetch]);

  //danh mục Kinh dị
  const horrormovieFetch = useCallback(() => {
    fetch(`http://localhost:5000/api/movies/discover/Horror`, {
      method: "GET",
      headers: { authorization: token },
    })
      .then((response) => response.json())
      .then((data) => setHorrormovies(data.results))
      .catch((err) => alert(err));
  }, []);
  //tìm nạp dữ liệu ngay sau khi tải trang, phía trên có thêm useCallback để không bị lặp vô hạn
  useEffect(() => {
    horrormovieFetch();
  }, [horrormovieFetch]);

  //danh mục Lãng mạn
  const romancemovieFetch = useCallback(() => {
    fetch(`http://localhost:5000/api/movies/discover/Romance`, {
      method: "GET",
      headers: { authorization: token },
    })
      .then((response) => response.json())
      .then((data) => setRomancemovies(data.results))
      .catch((err) => alert(err));
  }, []);
  //tìm nạp dữ liệu ngay sau khi tải trang, phía trên có thêm useCallback để không bị lặp vô hạn
  useEffect(() => {
    romancemovieFetch();
  }, [romancemovieFetch]);

  //danh mục Tài liệu
  const documentarieFetch = useCallback(() => {
    fetch(`http://localhost:5000/api/movies/discover/Documentary`, {
      method: "GET",
      headers: { authorization: token },
    })
      .then((response) => response.json())
      .then((data) => setDocumentaries(data.results))
      .catch((err) => alert(err));
  }, []);
  //tìm nạp dữ liệu ngay sau khi tải trang, phía trên có thêm useCallback để không bị lặp vô hạn
  useEffect(() => {
    documentarieFetch();
  }, [documentarieFetch]);

  //state ẩn/hiện component MovieDetail
  const [stateTrendingMovieDetail, setStateTrendingMovieDetail] =
    useState(false);
  const [poster, setPoster] = useState(false);
  const [topratedmovie, setTopratedMovie] = useState(false);
  const [actionmovie, setActionMovie] = useState(false);
  const [comedymovie, setComedyMovie] = useState(false);
  const [horrormovie, setHorrorMovie] = useState(false);
  const [romancemovie, setRomanceMovie] = useState(false);
  const [docmovie, setDocMovie] = useState(false);

  let currentMovie = useRef();

  //state bộ phim được chọn
  const [nextMovie, setNextMovie] = useState();
  //state id bộ phim được chọn để gán vào thuộc tính tùy chỉnh movieid của component MovieDetail
  const [movieid, setMovieId] = useState();

  //Tạo hàm để hiển thị thông tin cụ thể của phim; dùng cho sự kiện onClick của <img>
  const chosenTrendingMovie = (movie) => {
    //nếu giá trị của currentMovie.current không bằng giá trị của bộ phim được chọn movie
    if (currentMovie.current !== movie) {
      //thì đổi trạng thái thành true, hiện component MovieDetail
      setStateTrendingMovieDetail(true);
      //sau đó gán movie vào currentMovie.current và cập nhật state
      currentMovie.current = movie;
      setNextMovie(movie);
      setMovieId(movie.id);
      //nếu giá trị của currentMovie.current bằng giá trị của movie, là lần click tiếp theo người dùng đã click cùng một ảnh phim thay vì ảnh khác
    } else if (currentMovie.current === movie) {
      //thì đổi trạng thái của stateMovieDetail thành ngược lại để ẩn hoặc hiện component MovieDetail
      setStateTrendingMovieDetail(!stateTrendingMovieDetail);
      currentMovie.current = movie;
      setNextMovie(movie);
      setMovieId(movie.id);
    }
  };
  useEffect(() => {
    console.log(currentMovie.current);
    console.log(nextMovie);
  }, [currentMovie.current, nextMovie]);

  const chosenPoster = (movie) => {
    if (currentMovie.current !== movie) {
      setPoster(true);
      currentMovie.current = movie;
      setNextMovie(currentMovie.current);
      setMovieId(movie.id);
    } else if (currentMovie.current === movie) {
      setPoster(!poster);
      currentMovie.current = movie;
      setNextMovie(currentMovie.current);
      setMovieId(movie.id);
    }
  };

  const chosenTopRatedMovie = (movie) => {
    if (currentMovie.current !== movie) {
      setTopratedMovie(true);
      currentMovie.current = movie;
      setNextMovie(currentMovie.current);
      setMovieId(movie.id);
    } else if (currentMovie.current === movie) {
      setTopratedMovie(!topratedmovie);
      currentMovie.current = movie;
      setNextMovie(currentMovie.current);
      setMovieId(movie.id);
    }
  };

  const chosenActionMovie = (movie) => {
    if (currentMovie.current !== movie) {
      setActionMovie(true);
      currentMovie.current = movie;
      setNextMovie(currentMovie.current);
      setMovieId(movie.id);
    } else if (currentMovie.current === movie) {
      setActionMovie(!actionmovie);
      currentMovie.current = movie;
      setNextMovie(currentMovie.current);
      setMovieId(movie.id);
    }
  };

  const chosenComedyMovie = (movie) => {
    if (currentMovie.current !== movie) {
      setComedyMovie(true);
      currentMovie.current = movie;
      setNextMovie(currentMovie.current);
      setMovieId(movie.id);
    } else if (currentMovie.current === movie) {
      setComedyMovie(!comedymovie);
      currentMovie.current = movie;
      setNextMovie(currentMovie.current);
      setMovieId(movie.id);
    }
  };

  const chosenHorrorMovie = (movie) => {
    if (currentMovie.current !== movie) {
      setHorrorMovie(true);
      currentMovie.current = movie;
      setNextMovie(currentMovie.current);
      setMovieId(movie.id);
    } else if (currentMovie.current === movie) {
      setHorrorMovie(!horrormovie);
      currentMovie.current = movie;
      setNextMovie(currentMovie.current);
      setMovieId(movie.id);
    }
  };

  const chosenRomanceMovie = (movie) => {
    if (currentMovie.current !== movie) {
      setRomanceMovie(true);
      currentMovie.current = movie;
      setNextMovie(currentMovie.current);
      setMovieId(movie.id);
    } else if (currentMovie.current === movie) {
      setRomanceMovie(!romancemovie);
      currentMovie.current = movie;
      setNextMovie(currentMovie.current);
      setMovieId(movie.id);
    }
  };

  const chosenDocMovie = (movie) => {
    if (currentMovie.current !== movie) {
      setDocMovie(true);
      currentMovie.current = movie;
      setNextMovie(currentMovie.current);
      setMovieId(movie.id);
    } else if (currentMovie.current === movie) {
      setDocMovie(!docmovie);
      currentMovie.current = movie;
      setNextMovie(currentMovie.current);
      setMovieId(movie.id);
    }
  };

  return (
    <React.Fragment>
      <div className={styles.poster}>
        {originalmovies.map((movie) => (
          <img
            onClick={() => chosenPoster(movie)}
            className={styles.useanimation}
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt="movieimage"
          />
        ))}
      </div>
      {poster && <MovieDetailPoster movieData={nextMovie} movieid={movieid} />}
      <div className={styles.backdrops}>
        <p>Xu hướng</p>
        <div className={styles.backdrop}>
          {trendingmovies.map((movie) => (
            <img
              onClick={() => chosenTrendingMovie(movie)}
              className={styles.useanimation}
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
              alt="movieimage"
            />
          ))}
        </div>
        {stateTrendingMovieDetail && (
          <MovieDetail movieData={nextMovie} movieid={movieid} />
        )}
        <p>Xếp hạng cao</p>
        <div className={styles.backdrop}>
          {topratedmovies.map((movie) => (
            <img
              onClick={() => chosenTopRatedMovie(movie)}
              className={styles.useanimation}
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
              alt="movieimage"
            />
          ))}
        </div>
        {topratedmovie && (
          <MovieDetail movieData={nextMovie} movieid={movieid} />
        )}

        <p>Hành động</p>
        <div className={styles.backdrop}>
          {actionmovies.map((movie) => (
            <img
              onClick={() => chosenActionMovie(movie)}
              className={styles.useanimation}
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
              alt="movieimage"
            />
          ))}
        </div>
        {actionmovie && <MovieDetail movieData={nextMovie} movieid={movieid} />}

        <p>Hài</p>
        <div className={styles.backdrop}>
          {comedymovies.map((movie) => (
            <img
              onClick={() => chosenComedyMovie(movie)}
              className={styles.useanimation}
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
              alt="movieimage"
            />
          ))}
        </div>
        {comedymovie && <MovieDetail movieData={nextMovie} movieid={movieid} />}
        <p>Kinh dị</p>
        <div className={styles.backdrop}>
          {horrormovies.map((movie) => (
            <img
              onClick={() => chosenHorrorMovie(movie)}
              className={styles.useanimation}
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
              alt="movieimage"
            />
          ))}
        </div>
        {horrormovie && <MovieDetail movieData={nextMovie} movieid={movieid} />}

        <p>Lãng mạn</p>
        <div className={styles.backdrop}>
          {romancemovies.map((movie) => (
            <img
              onClick={() => chosenRomanceMovie(movie)}
              className={styles.useanimation}
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
              alt="movieimage"
            />
          ))}
        </div>
        {romancemovie && (
          <MovieDetail movieData={nextMovie} movieid={movieid} />
        )}

        <p>Tài liệu</p>
        <div className={styles.backdrop}>
          {documentaries.map((movie) => (
            <img
              onClick={() => chosenDocMovie(movie)}
              className={styles.useanimation}
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
              alt="movieimage"
            />
          ))}
        </div>
        {docmovie && <MovieDetail movieData={nextMovie} movieid={movieid} />}
      </div>
    </React.Fragment>
  );
};

export default MovieList;
