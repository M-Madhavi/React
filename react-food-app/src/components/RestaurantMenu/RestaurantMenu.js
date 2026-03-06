import { useEffect, useState } from "react";
import "./RestaurantMenu.css";
import Shimmer from "../Shimmer/Shimmer";
import { CDN_URL,MENU_API } from "../../../utils/constant";
import { useParams } from 'react-router';

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);   
  const [restName, setRestName] = useState("");

  const {resId} = useParams()
  console.log(resId,"vvv")

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API(resId));
    const json = await data.json();

    const items =
      json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
        ?.card?.itemCards;
        console.log("res",items);
        
    setRestInfo(items);
    setRestName(json?.data?.cards[0].card.card.text)
  };

  if (!restInfo) return <Shimmer />;

  return (
    <div className="menu-container">
      <h1 className="menu-heading">Our Menu</h1>
      <h1 className="menu-heading">{restName}</h1>

      <div className="card-grid">
        {restInfo
          .filter((item) => item?.card?.info)
          .map((item) => {
            const info = item.card.info;
            return (
              <div key={info.id} className="menu-card">
                <div className="image-wrapper">
                  <img
                    src={CDN_URL + info.imageId}
                    alt={info.name}
                    className="menu-image"
                  />
                </div>

                <div className="card-content">
                  <h2 className="item-name">{info.name}</h2>

                  <p className="description">
                    {info.description || "Fresh & Delicious"}
                  </p>

                  <p className="price">
                    ₹{(info.price || info.defaultPrice) / 100}
                  </p>

                  <button className="order-btn">Add to Cart</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RestaurantMenu;