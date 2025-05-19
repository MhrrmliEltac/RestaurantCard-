export interface RestaurantData {
  id: number;
  name: string;
  imageUrl: string;
  rating: number;
  cuisine: string;
}

export const restaurantData: RestaurantData[] = [
  {
    id: 1,
    name: "Şirvanşah",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz0AkdTD6cX5zU1KKulrpPhhtBmaFetkEMxw&s",
    rating: 4.7,
    cuisine: "Azərbaycan mətbəxi",
  },
  {
    id: 2,
    name: "Fontan Restaurant Gebele",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/43/f5/3f/fontan.jpg?w=400&h=400&s=1",
    rating: 4.3,
    cuisine: "Azərbaycan mətbəxi",
  },
  {
    id: 3,
    name: "Nar & Sharab",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/f4/98/21/nar-sharab.jpg?w=900&h=500&s=1",
    rating: 4.9,
    cuisine: "Azərbaycan mətbəxi",
  },
];
