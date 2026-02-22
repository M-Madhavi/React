import RestaurantCard from "../RestaurantCard/ReastaurantCard";
import restaurantList from "../../../utils/mockData";
import { useState } from "react";
const Content = () => {
  //local State Variable
  let [list, setList] = useState(restaurantList);

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = list.filter((res) => res.rating > 4.3);
            setList(filteredList);
            console.log(filteredList, "filteredList");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {list.map((res) => (
          <RestaurantCard
            key={res.id}
            name={res.name}
            cuisine={res.cuisine}
            image={res.image}
            rating={res.rating}
            time={res.time}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
