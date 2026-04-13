import { CDN_URL, RESTAURANT_IMAGES } from "../../../utils/constant";


const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {

  const { name, cuisine, image, rating, time } = props;
  const fallbackImage =
    RESTAURANT_IMAGES[Math.floor(Math.random() * RESTAURANT_IMAGES.length)];
  console.log("random", fallbackImage)
  const imageUrl = image
    ? CDN_URL + image
    : fallbackImage;
  return (
    <div className="res-card" style={styleCard}>
      <img alt="res-logo"
        src={imageUrl}
        className="res-logo"
        onError={(e) => {
          e.target.src = fallbackImage;
        }}></img>
      <h4>{name}</h4>
      <h4>{cuisine}</h4>
      <h5>{rating}</h5>
      <h5>{time}</h5>
    </div>
  );
};

// Higher oreder Component
//Input - Restaurant card=> Restaurantcard with label

export const withLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute top-2 left-2 bg-black text-white text-xs px-3 py-1 rounded-md z-10">
          Promoted
        </span>
        <RestaurantCard {...props} />

      </div>
    );
  };
};
export default RestaurantCard