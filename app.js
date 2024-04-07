import React from "react";
import ReactDOM from "react-dom/client";

// React creatElement ==> react.createElement is Object ==> HTMLelement(reader)
// const heading = React.createElement("h1",{id: "heading"},"ronak is good boy");
const jsxheading = <h1 id="heading" >the match will start from  8 pm</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading ); 