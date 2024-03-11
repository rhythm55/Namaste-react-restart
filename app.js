import React from "react";
import ReactDOM from "react-dom/client";

const ele = <span> rhythm </span>
const TitleEle = ( 
<h1 id="title">
    Namaste Title
    {/* react element inside react element */}
    {ele}      
</h1>)

const TitleEle2 = <h1> hi </h1>

const TryComponent = () => (
  <div id="container">
    {TitleEle2}
  </div>
);

// React Functional component
const HeadingComponent = () => (
  <div id="container">
    {<TryComponent/>}
     {/* react element inside react component */}
    {TitleEle}
    <h1 id="heading" className="red">
      Namaste using JSX2 {2024-1997}
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

