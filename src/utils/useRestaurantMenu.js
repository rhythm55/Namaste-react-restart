import { useEffect, useState } from "react";
import { SWIGGY_API_RESTRUANT_DETAIL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await fetch(SWIGGY_API_RESTRUANT_DETAIL + resId);
    const json = await result.json();
    console.log("json", json);
    const resturantDetailInfo = json?.data?.cards[0]?.card?.card?.info;
    const restrauntMenu =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (item) => {
          return (
            item.card.card["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          );
        }
      );

    setResInfo({
      resturantDetailInfo,
      restrauntMenu,
    });
  };

  return resInfo;
};

export default useRestaurantMenu;
