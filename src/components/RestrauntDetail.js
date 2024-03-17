import React, { useState } from "react";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

export const RestrauntDetail = () => {
  const [showItemIndex, setShowItemIndex] = useState(0);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
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
      {resInfo?.restrauntMenu?.map((menu, index) => (
        <RestaurantCategory
          key={menu.card.card.title}
          data={menu.card.card}
          showItem={showItemIndex === index}
          setShowItemIndex={() => setShowItemIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestrauntDetail;
