import React, { useState } from "react";
import $ from "jquery";

const JqueryAjax: React.FC = () => {
  const [quote, setQuote] = useState("");
  const fetchData = () => {
    $.ajax({
      url: "https://api.quotable.io/random",
      method: "GET",
      success: (data) => {
        setQuote(data?.content)
        console.log("jquery", { data });
      },
      error: () => {
        console.log("Error");
      },
    });
  };

  return (
    <div>
      <button onClick={() => fetchData()}>Jquery AJAX</button>
      <p>{quote}</p>
    </div>
  );
};

export default JqueryAjax;
