import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header/Header";
import Content from "./components/Content/Content";


const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Content />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
