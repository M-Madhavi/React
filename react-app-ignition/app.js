import React from "react";
import ReactDOM from "react-dom/client";

const Title = function () {
  return (
    <h1 id="heading" className="root">
      React!
    </h1>
  );
};
const jsxheading = (
  <h1 id="heading" className="root">
    React!!!, using JSX
  </h1>
);
//React Functional component
const HeadingComponent = () => (
  <div id="container">
    <h1 className="heading">React Functional Component</h1>
    {Title()}
    {/* <Title></Title>
    <Title /> */}
    <pre>
      {
        // here you can write any js expression here
        jsxheading
      }
    </pre>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
