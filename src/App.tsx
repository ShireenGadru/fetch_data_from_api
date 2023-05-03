import "./App.css";
import Axios from "./data-fetch/Axios";
import FetchApi from "./data-fetch/FetchApi";
import JqueryAjax from "./data-fetch/JqueryAjax";
import XHR from "./data-fetch/XHR";

function App() {
  return (
    <>
      Different methods to fetch data
      <XHR />
      <FetchApi />
      <JqueryAjax />
      <Axios />
    </>
  );
}

export default App;
