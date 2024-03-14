import { useState } from "react";
import { Link } from "react-router-dom"

import { LOGO_URL } from "../utils/constants";

const HeaderComponent = () => {
  const [btnText, setBtnText] = useState('Login');
  
    return (
      <div className="header">
        <div>
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
              </li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li>Cart</li>
            <li>
              <button onClick={()=>
                {setBtnText(btnText === 'Login' ? 'Logout' : 'Login')}
              }>
                {btnText}
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  };

export default HeaderComponent;