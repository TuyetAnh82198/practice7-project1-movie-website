const moviesModels = require("../models/Movies");

const trending = (req, res) => {
  const movieList = moviesModels.all();
  //trả về danh sách các film được sắp xếp theo trường popularity giảm dần
  const sortedMovieList = movieList.sort((a, b) => b.popularity - a.popularity);
  //mỗi Page sẽ chứa 20 phần tử
  const paginate = (array, page_size, page_number) => {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  };

  const movieList20ItemsPerPage = paginate(
    sortedMovieList,
    20,
    req.params.page ? req.params.page : 1
  );

  // res.send(movieList20ItemsPerPage);
  // console.log(movieList.length);
  return res.status(200).json({
    results: movieList20ItemsPerPage,
    page: req.params.page ? req.params.page : 1,
    total_pages: Math.ceil((movieList.length - 1) / 20),
  });
};

module.exports = trending;
