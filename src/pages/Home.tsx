import React, { useState } from "react";
import RestaurantCard from "../components/RestaurantCard/RestaurantCard";
import { restaurantData, type RestaurantData } from "../components/_mock/data";

const Home: React.FC = () => {
  const [restaurants] = useState<RestaurantData[]>(restaurantData);

  return (
    <div className="app-container">
      <h2>Restoran Siyahısı</h2>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            id={restaurant.id}
            name={restaurant.name}
            imageUrl={restaurant.imageUrl}
            rating={restaurant.rating}
            cuisine={restaurant.cuisine}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
