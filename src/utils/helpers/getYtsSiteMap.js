import axios from "axios";

const ytsSitemap = async () => {
  const xml = await axios
    .get("https://yts.mx/sitemap.xml")
    .then((res) => {
      console.log("xml res", res);
      return res;
    })
    .catch((err) => {
      //   console.log("error", err);
      return {};
    });

  const res = await axios
    .post("http://localhost:3003/xml", { xml })
    .then((response) => {
      console.log("res from server", response);
    });

  return res;
};

export default ytsSitemap;
