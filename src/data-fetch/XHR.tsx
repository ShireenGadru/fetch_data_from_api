import React, { useState } from "react";

const FetchWithXHR: React.FC = () => {
  const [quote, setQuote] = useState("");

  const fetchData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.quotable.io/random");
    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        setQuote(data?.content);
        console.log("XHR", { data });
      } else {
        console.log("request failed");
      }
    };
    xhr.send();
  };

  return (
    <div>
      <button onClick={() => fetchData()}>XHR</button>
      <p>{quote}</p>
    </div>
  );
};

export default FetchWithXHR;
