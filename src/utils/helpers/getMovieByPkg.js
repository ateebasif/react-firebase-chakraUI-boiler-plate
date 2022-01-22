import axios from "axios";

const getMovies = async () => {
  const res = await axios
    .get("http://localhost:3002/getMovie")
    .then(function (response) {
      // handle success
      const { data } = response;
      console.log(data);
      return data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  console.log("res", res);
};
