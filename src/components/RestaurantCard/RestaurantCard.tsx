import "../../assets/style/card-style.css";
import type { RestaurantData } from "../_mock/data";

const RestaurantCard = ({
  name,
  imageUrl,
  rating,
  cuisine,
}: RestaurantData) => {
  return (
    <div className="restaurant-card">
      <div className="overlay"></div> {/* Yalnız fon kimi */}
      <img src={imageUrl} alt={name} className="restaurant-image" />
      <div className="restaurant-info">
        <h3>{name}</h3>
        <p>{cuisine}</p>
        <div className="rating">
          <span>⭐</span>
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
