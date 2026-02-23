import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { useState, useEffect } from "react";
import { RESTAURANT_IMAGES } from "../../../utils/constant";
import Shimmer from "../Shimmer/Shimmer";

const Content = () => {
  //local State Variable
  let [list, setList] = useState([]);
  useEffect(() => {
    console.log("component Rendered");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(process.env.API_URL);
    const json = await data.json();
    setList(json?.data?.cards);
  };

  return !list.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = list.filter(
              (res) => res.card?.card?.info?.avgRating > 4.2,
            );
            setList(filteredList);
            console.log(filteredList, "filteredList");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {list
          .filter((res) => res?.card?.card?.info)
          .map((res, index) => {
            const randomImage =
              RESTAURANT_IMAGES[index % RESTAURANT_IMAGES.length];
            return (
              <RestaurantCard
                key={res.card.card.info.id}
                name={res.card.card.info.name}
                cuisine={res.card.card.info.cuisines}
                image={randomImage}
                rating={res.card.card.info.avgRating}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Content;
