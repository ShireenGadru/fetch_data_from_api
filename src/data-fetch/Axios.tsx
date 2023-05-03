import axios from "axios";
import React, { useState } from "react";

const Axios: React.FC = () => {
  const [quote, setQuote] = useState("");
  const fetchData = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => setQuote(res.data.content))
      .catch((err) => console.log("request failed", err));
  };

  return (
    <div>
      <button onClick={() => fetchData()}>axios</button>
      <p>{quote}</p>
    </div>
  );
};

export default Axios;
