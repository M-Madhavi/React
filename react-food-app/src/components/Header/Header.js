import { LOGO_URL } from "../../../utils/constant";
import { useState } from "react";
import { Link } from "react-router";

const HeaderComponent = () => {
  const [btnNameReact, SetBtnNameReact] = useState("LogIn");
  console.log("whole Header Component is Rerendered when clicked on button");
  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "LogIn"
                ? SetBtnNameReact("LogOut")
                : SetBtnNameReact("LogIn");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
