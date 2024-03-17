import { useState } from "react";
import { useEffect } from "react";
import { SWIGGY_BIRYANI_API_URL } from "./constants";

const useBiryaniList = () => {
  [biryaniList, setBiryaniList] = useState([]);

  useEffect(() => {
    fetchBiryaniList();
  }, []);

  const fetchBiryaniList = async () => {
    const response = await fetch(SWIGGY_BIRYANI_API_URL);
    const json = await response.json();
    const list = json.data.cards
      .filter((card) => card.card?.card?.info)
      .map((card) => card.card?.card?.info);
    setBiryaniList(list);
  };

  return biryaniList;
};

export default useBiryaniList;
