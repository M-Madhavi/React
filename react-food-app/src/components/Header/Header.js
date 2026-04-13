import { LOGO_URL } from "../../../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../../../utils/useOnlineStatus";
import UserContext from "../../../utils/UserContex";

const HeaderComponent = () => {
  const [btnNameReact, SetBtnNameReact] = useState("LogIn");
  // console.log("whole Header Component is Rerendered when clicked on button");
  const onlineStatus = useOnlineStatus()
  const { loggedInUser } = useContext(UserContext)

  return (
    <div className="flex justify-between">
      <div>
        <img className="w-25" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li> Online Status :{onlineStatus ? "✅" : "🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
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
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
