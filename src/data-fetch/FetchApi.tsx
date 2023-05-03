import React, { useState } from "react";

const FetchApi: React.FC = () => {
  const [quote, setQuote] = useState("");
  const fetchData = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response?.json();
    setQuote(data?.content);
    console.log("fetch async", { data });
  };

  //   fetch("https://api.quotable.io/random")
  //     .then((res) => res.json())
  //     .then((data) => console.log("Fetch", { data }))
  //     .catch((err) => console.log(err));

  return (
    <div>
      <button onClick={() => fetchData()}>fetch API</button>
      <p>{quote}</p>
    </div>
  );
};

export default FetchApi;
