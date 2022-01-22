import axios from "axios";

const getMovies = async (url) => {
  const response = await axios
    .get(url)
    .then((res) => {
      // console.log("api res", res)
      return res;
    })
    .catch((err) => {
      console.log("error", err);
      return {};
    });

  console.log("response", response);
  return response;
};

// .get(`http://www.omdbapi.com/?apikey=9d7f0a9f&s=${movie}`)
// `http://www.omdbapi.com/?apikey=9d7f0a9f&s=${movieSearch}&type=movie&tomatoes=true`
// `http://www.omdbapi.com/?apikey=9d7f0a9f&s=${movieSearch}&r=json&tomatoes=true`
// .get(`http://www.omdbapi.com/?apikey=9d7f0a9f&i=tt1375666&plot=full`)

export default getMovies;
