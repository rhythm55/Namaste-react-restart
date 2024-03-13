import { useState } from "react";
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
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
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