
import React from "react";

export default function Home({ addToCart, province, setProvince, provinces, recs, searchTerm, defaultFoodItems }) {
  const filteredItems = searchTerm
    ? defaultFoodItems.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : recs.length > 0
      ? recs
      : defaultFoodItems;

  return (
    <div className="relative min-h-screen mt-[85px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <FoodItem key={item.id} item={item} addToCart={addToCart} />
          ))
        ) : (
          <p className="text-gray-600">No items found.</p>
        )}
      </div>
    </div>
  );
}

const FoodItem = ({ item, addToCart }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <img
      src={item.img}
      alt={item.name}
      className="w-full h-48 object-cover"
      loading="lazy"
    />
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
      <p className="text-green-700 font-bold mb-2">Rs. {item.price}</p>
      <button
        onClick={() => addToCart(item)}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add to Cart
      </button>
    </div>
  </div>
);
