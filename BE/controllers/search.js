const moviesModels = require("../models/Movies");

const search = (req, res) => {
  let keyword;
  if (req.body) {
    keyword = req.body.keyWordInput;
  } else {
    return res.status(400).send({ message: "Not found keyword parram." });
  }

  const movieList = moviesModels.all();
  const searchResults = movieList.filter(
    (movie) =>
      movie.overview.toLowerCase().includes(keyword) ||
      (typeof movie.title === "string" &&
        movie.title.toLowerCase().includes(keyword))
  );

  //mỗi Page sẽ chứa 20 phần tử
  const paginate = (array, page_size, page_number) => {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  };

  const movieList20ItemsPerPage = paginate(
    searchResults,
    20,
    req.params.page ? req.params.page : 1
  );
  return res.status(200).json({
    results: movieList20ItemsPerPage,
    page: req.params.page ? req.params.page : 1,
    total_pages: Math.ceil((searchResults.length - 1) / 20),
  });

  // res.send(movieList.filter((m) => m.overview.toLowerCase().includes(keyword)));
};

module.exports = search;
