import "./RestaurantMenu.css";
import Shimmer from "../Shimmer/Shimmer";
import { CDN_URL } from "../../../utils/constant";
import { useParams } from 'react-router';
import useRestaurantMenu from "../../../utils/useRestaurantMenu";
import RestaurantCategoryAccordian from "./RestaurantCategoryAccordian";
const RestaurantMenu = () => {
  const { resId } = useParams()
  const { restInfo, restName, apiResponse } = useRestaurantMenu(resId);
  let categoryItems = []
  if (apiResponse) {
    categoryItems = apiResponse.filter(c => c.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log("categoryItems", categoryItems)
  }
  if (!restInfo) return <Shimmer />;

  return (
    <div className="menu-container">
      <h1 className="menu-heading">Our Menu</h1>
      <h1 className="menu-heading">{restName}</h1>
      <div className=""> {categoryItems.map((c) => {
        return <RestaurantCategoryAccordian key={c.card?.card?.title} data={c.card?.card} />
      })}
      </div>
      {/* 
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
      </div> */}
    </div>
  );
};

export default RestaurantMenu;