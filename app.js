import React from "react";
import ReactDOM from "react-dom/client";

import restaurantList from "./restraunt-list";

/**
 * Header
 *  -logo
 *  - nav items
 * Body
 *  - search
 *  - restaurantContainer
 *   - restraunt card
 *      - Img
 *      - Name of res, star rating, cusine, delivery time
 * Footer
 *  - copyright
 *  - Links
 *  - address
 *  - contact
 */

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5296974.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="input"></input>
        <button>search</button>
      </div>
      <div className="restraunt-container">
       { restaurantList.map((restraunt) => (<RestrauntCardComponent key={restraunt.data.id} resData={restraunt.data} />)) }
      </div>
    </div>
  );
};

const RestrauntCardComponent = (props) => {
  const {cloudinaryImageId, cuisines, maxDeliveryTime, avgRating} = props.resData;
  return (
    <div className="restraunt-card" style={styleCard}>
      <img
        className="restraunt-card-image"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt="restraunt logo"
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating} start</h4>
      <h4>{maxDeliveryTime} minutes</h4>
    </div>
  );
};

// inline styling
const styleCard = {
  border: "1px solid green",
  height: "400px",
  width: "300px",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
