const moviesModels = require("../models/Movies");

const searchByGenre = (req, res) => {
  let genre;
  //nếu người dùng có truyền vào param genre
  if (req.params.genre) {
    genre = req.params.genre;
  }
  //nếu người dùng không truyền vào param genre
  else {
    return res.status(400).send({ message: "Not found gerne parram." });
  }

  const movieList = moviesModels.all();
  const genreList = moviesModels.genre();

  const foundGenre = genreList.find((item) => item.name === genre);

  //Nếu người dùng truyền vào một gerne id có trong danh sách
  if (foundGenre) {
    const foundMovies = movieList.filter((movie) =>
      movie.genre_ids.includes(foundGenre.id)
    );

    const paginate = (array, page_size, page_number) => {
      // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
      return array.slice(
        (page_number - 1) * page_size,
        page_number * page_size
      );
    };

    const movieList20ItemsPerPage = paginate(
      foundMovies,
      20,
      req.params.page ? req.params.page : 1
    );

    return res.status(200).json({
      results: movieList20ItemsPerPage,
      page: req.params.page ? req.params.page : 1,
      total_pages: Math.ceil((foundMovies.length - 1) / 20),
      genre_name: genre,
    });
  } else {
    //Nếu người dùng truyền vào một gerne id không có trong danh sách
    return res.status(400).send({ message: "Not found that gerne id." });
  }

  // res.send(foundMovies);
};

module.exports = searchByGenre;
