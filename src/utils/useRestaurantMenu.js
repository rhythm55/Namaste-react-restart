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

    const resturantDetailInfo = json?.data?.cards[0]?.card?.card?.info;
    const restrauntMenu =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    setResInfo({
      resturantDetailInfo,
      restrauntMenu,
    });
  };

  return resInfo;
};

export default useRestaurantMenu;
