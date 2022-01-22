import axios from "axios";

const searchMovie = async (movie) => {
  const res = await axios.post(
    "http://localhost:3002/searchMovie",

    {
      movie: movie,
    }
  );
  const { data } = res;
  console.log("search res", res);
};
