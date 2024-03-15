import React from "react";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CLOUDINARY_IMAGE_URL } from "../utils/constants";

export const RestrauntDetail = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);
  return (
    <div className="res-detail">
      <div className="res-title-container">
        <div className="res-title">
          <h1>{resInfo?.resturantDetailInfo?.name}</h1>
          <h4>
            {resInfo?.resturantDetailInfo?.areaName} ,{" "}
            {resInfo?.resturantDetailInfo?.sla?.slaString}
          </h4>
        </div>
        <div className="rating-container">
          <h3>{resInfo?.resturantDetailInfo?.avgRating}</h3>
          <h4>{resInfo?.resturantDetailInfo?.totalRatingsString}</h4>
        </div>
      </div>
      {resInfo?.restrauntMenu?.map((menu) => (
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
