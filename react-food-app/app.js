// import React from "react";
import ReactDOM from "react-dom/client";
import restaurantList from "./utils/mockData";
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <div>
        <img
          src="https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/68218/optimized_product_thumb_stage.jpg"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
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

const Content = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantList.map((res) => (
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

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Content />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
