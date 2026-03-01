import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { useState, useEffect } from "react";
import { RESTAURANT_IMAGES } from "../../../utils/constant";
import Shimmer from "../Shimmer/Shimmer";

const Content = () => {
  //local State Variable
  const [list, setList] = useState([]);
  const [searchText, SetSearchText] = useState("");
  const [filteredRestaurant, SetFilteredRestaurant] = useState([]);
  useEffect(() => {
    console.log("component Rendered");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(process.env.API_URL);
    const json = await data.json();
    console.log(
      "data",
      json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
    setList(
      json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
    SetFilteredRestaurant(
      json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
  };

  return !list.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              SetSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = list.filter((res) =>
                res?.info?.name?.toLowerCase().includes(searchText),
              );
              SetFilteredRestaurant(filteredRestaurant);
              SetSearchText("")
              console.log("filteredRestaurant", filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
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
        {filteredRestaurant
          .filter((res) => res?.info)
          .map((res, index) => {
            const randomImage =
              RESTAURANT_IMAGES[index % RESTAURANT_IMAGES.length];
            return (
              <RestaurantCard
                key={res.info.id}
                name={res.info.name}
                cuisine={res.info.cuisines}
                image={randomImage}
                rating={res.info.avgRating}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Content;
