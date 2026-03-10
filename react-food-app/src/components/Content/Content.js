import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from 'react-router'
import useOnlineStatus from "../../../utils/useOnlineStatus";


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
  const onlineStatus = useOnlineStatus()
  console.log("online-------------",onlineStatus)
  if (onlineStatus === false) {
    return (<h1>Ooops!!! you are offline</h1>);
  } return !list.length ? (
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
          .map((res) => {
            return (
              <Link
                key={res.info.id}
                className="res-link"
                to={"/restaurants/" + res.info.id}
              >
                <RestaurantCard
                  name={res.info.name}
                  cuisine={res.info.cuisines}
                  image={res.info.cloudinaryImageId}
                  rating={res.info.avgRating}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Content;
