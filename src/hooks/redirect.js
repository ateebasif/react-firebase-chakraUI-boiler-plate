import { useNavigate } from "react-router-dom";

function Redirect() {
  let navigate = useNavigate();
  return navigate;
}

export default Redirect;
