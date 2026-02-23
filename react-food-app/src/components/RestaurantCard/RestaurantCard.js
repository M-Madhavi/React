
const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = (props) => {
  const { name, cuisine, image, rating, time } = props;
  return (
    <div className="res-card" style={styleCard}>
      <img alt="res-logo" src={image} className="res-logo"></img>
      <h4>{name}</h4>
      <h4>{cuisine}</h4>
      <h5>{rating}</h5>
      <h5>{time}</h5>
    </div>
  );
};

export default RestaurantCard