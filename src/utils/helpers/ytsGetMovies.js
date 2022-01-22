import axios from "axios";

const getMovies = async (url) => {
  const response = await axios
    .get(url)
    .then((res) => {
      // console.log("res", res);
      console.log("res", res.data.data);

      return res;
    })
    .catch((err) => {
      //   console.log("error", err);
      return {};
    });

  return response;
};

export default getMovies;
