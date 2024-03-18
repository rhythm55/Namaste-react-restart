import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";

const HeaderComponent = () => {
  const [btnText, setBtnText] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const loggedInUser = useContext(UserContext);
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="header d-flex justify-content-between p-2">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li>{onlineStatus ? "✅" : "🔴"} </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart ({cartItems.length})</Link>
          </li>
          <li>
            <button
              onClick={() => {
                setBtnText(btnText === "Login" ? "Logout" : "Login");
                // loggedInUser.setUserName(
                //   btnText === "Login" ? "Rhythm Thakur" : "Pankhi"
                // );
              }}
            >
              {btnText}
            </button>
          </li>
          <li>{loggedInUser?.loggedInUserName}</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
