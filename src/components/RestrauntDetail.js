import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  SWIGGY_API_RESTRUANT_DETAIL,
  CLOUDINARY_IMAGE_URL,
} from "../utils/constants";

export const RestrauntDetail = () => {
  const { resId } = useParams();
  const [restrauntDetails, setRestrauntDetails] = useState([]);
  const [restrauntMenu, setRestrauntMenu] = useState([]);

  useEffect(() => {
    fetchRestrauntDetail();
  }, []);

  const fetchRestrauntDetail = async () => {
    const result = await fetch(SWIGGY_API_RESTRUANT_DETAIL + resId);
    const json = await result.json();
    const resturantDetailInfo = json?.data?.cards[0]?.card?.card?.info;
    const restrauntMenu =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;

    setRestrauntDetails(resturantDetailInfo);
    setRestrauntMenu(restrauntMenu);
  };

  return (
    <div className="res-detail">
      <div className="res-title-container">
        <div className="res-title">
          <h1>{restrauntDetails.name}</h1>
          <h4>
            {restrauntDetails.areaName} , {restrauntDetails?.sla?.slaString}
          </h4>
        </div>
        <div className="rating-container">
          <h3>{restrauntDetails.avgRating}</h3>
          <h4>{restrauntDetails.totalRatingsString}</h4>
        </div>
      </div>
      {restrauntMenu.map((menu) => (
        <div key={menu.card.info.id} className="menu-item">
          <div className="display-flex">
            <div className="menu-item-details">
              <p className={menu.card.info.isVeg === 1 ? "green" : "red"}></p>
              <h1>{menu.card.info.name}</h1>
              <p>{menu.card.info.price}</p>
              <p>{menu.card.info.description}</p>
            </div>
            <div className="menu-item-image">
              <img
                src={`${CLOUDINARY_IMAGE_URL},h_208,c_fit/${menu.card.info.imageId}`}
              ></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestrauntDetail;
