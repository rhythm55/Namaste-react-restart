import RestrauntCardComponent from './RestrauntCard'
import restaurantList from '../utils/mockData'
import { useState } from 'react';

const BodyComponent = () => {
    const [restruantsList, setrestruantsList] = useState(restaurantList);
    const filterRestrauntList = () => {
      const filteredResList = restruantsList.filter((res) => res.data.avgRating > 4)
      setrestruantsList(filteredResList);
    }

    return (
      <div className="body">
        <div className="search">
          <input type="input"></input>
          <button>search</button>
          <button onClick={filterRestrauntList}>filter</button>
        </div>
        <div className="restraunt-container">
         { restruantsList.map((restraunt) => (<RestrauntCardComponent key={restraunt.data.id} resData={restraunt.data} />)) }
        </div>
      </div>
    );
  };

export default BodyComponent;