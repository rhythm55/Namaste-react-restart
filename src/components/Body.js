import RestrauntCardComponent, { withPromoteLabel } from "./RestrauntCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ShimmmerComponent from "./shimmer";
import { SWIGGY_API_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import useBiryaniList from "../utils/useBiryaniList";

const BodyComponent = () => {
  const [restruantList, setRestruantList] = useState([]);
  const [filteredRestruantList, setFilteredRestruantList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [biryaniToggle, setBiryaniToggle] = useState(false);
  const RestrauntCardPromoted = withPromoteLabel(RestrauntCardComponent);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    const elements =
      json.data?.success.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const list = elements.map((ele) => ele.info);
    setRestruantList(list);
    setFilteredRestruantList(list);
  };

  const searchRestraunt = () => {
    const searchResults = restruantList.filter((restruant) =>
      restruant.name.toLowerCase().includes(searchInput)
    );
    setFilteredRestruantList(searchResults);
  };

  const topRatedRestrauntList = () => {
    const result = restruantList.filter((restruant) => restruant.avgRating > 4);
    setFilteredRestruantList(result);
  };

  const biryaniList = useBiryaniList();

  const toggleBiryaniList = () => {
    const newBiryaniToggle = !biryaniToggle;
    setBiryaniToggle(newBiryaniToggle);
    if (newBiryaniToggle) {
      setFilteredRestruantList(biryaniList);
    } else {
      setFilteredRestruantList(restruantList);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <>
        <h1>you are offline</h1>
      </>
    );
  }

  return filteredRestruantList.length === 0 ? (
    <ShimmmerComponent />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="input"
          data-testid="search-input"
          onChange={(e) => setSearchInput(e.target.value)}
        ></input>
        <button onClick={() => searchRestraunt()}>search</button>
        <button onClick={() => topRatedRestrauntList()}>
          Top Rated restraunt
        </button>
        <button onClick={() => toggleBiryaniList()}>
          {biryaniToggle ? "clear Biryani results" : "get Biryani"}
        </button>
      </div>
      <div className="restraunt-container">
        {filteredRestruantList?.map((restraunt) => (
          <Link
            className="res-link"
            key={restraunt.id}
            to={`restaurant/${restraunt.id}`}
          >
            {restraunt.promoted ? (
              <RestrauntCardPromoted resData={restraunt} />
            ) : (
              <RestrauntCardComponent resData={restraunt} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
