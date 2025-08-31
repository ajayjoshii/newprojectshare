// import React from "react";

// export default function Home({
//   addToCart,
//   province,
//   setProvince,
//   provinces,
//   recs,
//   searchTerm,
//   defaultFoodItems,
// }) {
//   // Filter default food items based on search term
//   const filteredItems = searchTerm
//     ? defaultFoodItems.filter((item) =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     : defaultFoodItems;

//   return (
//     <div className="relative min-h-screen mt-[85px] px-4">
//       {/* Recommended Section */}

//       {recs && recs.length > 0 && (
//         <section className="mt-8">
//           <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
//             Recommended For You
//           </h2>
//           <p className="text-center text-gray-600 mb-4">
//             Based on your orders in <span className="font-medium">{province || "your province"}</span>
//           </p>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//             {recs.map((item) => (
//               <div
//                 key={item._id || item.id}
//                 className="border rounded-lg p-2 flex flex-col items-center relative shadow hover:shadow-lg transition-shadow duration-300 bg-white"
//               >
//                 <div className="w-full h-36 overflow-hidden rounded">
//                   <img
//                     src={item.image || item.img || "https://via.placeholder.com/150"}
//                     alt={item.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <span className="font-medium mt-2">{item.name}</span>
//                 <span className="text-gray-600">Rs. {item.price}</span>
//                 <button
//                   onClick={() =>
//                     addToCart({ id: item._id || item.id, name: item.name, price: item.price })
//                   }
//                   className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200"
//                 >
//                   Add to Cart
//                 </button>
//                 <span className="absolute top-2 left-2 bg-yellow-400 text-xs px-2 py-0.5 rounded font-semibold">
//                   Recommended
//                 </span>
//               </div>
//             ))}
//           </div>
//         </section>
//       )}

//       {recs && recs.length === 0 && (
//         <p className="text-gray-600 mt-4 text-center">
//           No recommendations yet. Add some orders to get personalized suggestions!
//         </p>
//       )}

//       {/* All Food Items */}
//       <section className="mt-12">
//         <h2 className="text-2xl font-bold mb-6 text-center text-green-700">All Food Items</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredItems.length > 0 ? (
//             filteredItems.map((item) => (
//               <FoodItem key={item.id || item._id} item={item} addToCart={addToCart} />
//             ))
//           ) : (
//             <p className="text-gray-600 text-center col-span-full">No items found.</p>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }

// // Reusable Food Item component
// const FoodItem = ({ item, addToCart }) => (
//   <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
//     <div className="w-full h-48 overflow-hidden">
//       <img
//         src={item.img || item.image || "https://via.placeholder.com/150"}
//         alt={item.name}
//         className="w-full h-full object-cover"
//       />
//     </div>
//     <div className="p-4">
//       <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
//       <p className="text-green-700 font-bold mb-2">Rs. {item.price}</p>
//       <button
//         onClick={() => addToCart({ id: item._id || item.id, name: item.name, price: item.price })}
//         className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200"
//       >
//         Add to Cart
//       </button>
//     </div>
//   </div>
// );


// ------------------ Home.jsx ------------------

// import React from "react";

// export default function Home({
//   addToCart,
//   province,
//   setProvince,
//   provinces,
//   recs,
//   searchTerm,
//   defaultFoodItems,
// }) {
//   // Filter default food items based on search term
//   const filteredItems = searchTerm
//     ? defaultFoodItems.filter((item) =>
//         item.name.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : defaultFoodItems;

//   return (
//     <div className="relative min-h-screen mt-[85px] px-4">
//       {/* Recommended Section */}
//       {recs && recs.length > 0 && (
//         <section className="mt-8">
//           <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
//             Recommended For You
//           </h2>
//           <p className="text-center text-gray-600 mb-4">
//             {recs.isUserSpecific
//               ? `Based on your past orders in ${province}`
//               : `Based on popular items in ${province || "your province"}`}
//           </p>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//             {recs.items.map((item) => (
//               <div
//                 key={item._id || item.id}
//                 className="border rounded-lg p-2 flex flex-col items-center relative shadow hover:shadow-lg transition-shadow duration-300 bg-white"
//               >
//                 <div className="w-full h-36 overflow-hidden rounded">
//                   <img
//                     src={item.image || item.img || "https://via.placeholder.com/150"}
//                     alt={item.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <span className="font-medium mt-2">{item.name}</span>
//                 <span className="text-gray-600">Rs. {item.price}</span>
//                 <button
//                   onClick={() =>
//                     addToCart({ id: item._id || item.id, name: item.name, price: item.price })
//                   }
//                   className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200"
//                 >
//                   Add to Cart
//                 </button>
//                 <span className="absolute top-2 left-2 bg-yellow-400 text-xs px-2 py-0.5 rounded font-semibold">
//                   Recommended
//                 </span>
//               </div>
//             ))}
//           </div>
//         </section>
//       )}

//       {recs && recs.length === 0 && (
//         <p className="text-gray-600 mt-4 text-center">
//           No recommendations yet. Add some orders to get personalized suggestions!
//         </p>
//       )}

//       {/* All Food Items */}
//       <section className="mt-12">
//         <h2 className="text-2xl font-bold mb-6 text-center text-green-700">All Food Items</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredItems.length > 0 ? (
//             filteredItems.map((item) => (
//               <FoodItem key={item.id || item._id} item={item} addToCart={addToCart} />
//             ))
//           ) : (
//             <p className="text-gray-600 text-center col-span-full">No items found.</p>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }

// // Reusable Food Item component
// const FoodItem = ({ item, addToCart }) => (
//   <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
//     <div className="w-full h-48 overflow-hidden">
//       <img
//         src={item.img || item.image || "https://via.placeholder.com/150"}
//         alt={item.name}
//         className="w-full h-full object-cover"
//       />
//     </div>
//     <div className="p-4">
//       <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
//       <p className="text-green-700 font-bold mb-2">Rs. {item.price}</p>
//       <button
//         onClick={() => addToCart({ id: item._id || item.id, name: item.name, price: item.price })}
//         className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200"
//       >
//         Add to Cart
//       </button>
//     </div>
//   </div>
// );


import React from "react";

export default function Home({ addToCart, province, recs, defaultFoodItems, searchTerm }) {
  const filteredItems = searchTerm
    ? defaultFoodItems.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : defaultFoodItems;

  return (
    <div className="relative min-h-screen mt-[85px] px-4">
      {recs && recs.length > 0 && (
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Recommended For You</h2>
          <p className="text-center text-gray-600 mb-4">
            Based on your orders in <span className="font-medium">{province || "your province"}</span>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {recs.map(item => (
              <div key={item._id || item.id} className="border rounded-lg p-2 flex flex-col items-center relative shadow hover:shadow-lg transition-shadow duration-300 bg-white">
                <div className="w-full h-36 overflow-hidden rounded">
                  <img src={item.image || item.img || "https://via.placeholder.com/150"} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <span className="font-medium mt-2">{item.name}</span>
                <span className="text-gray-600">Rs. {item.price}</span>
                <button onClick={() => addToCart({ id: item._id || item.id, name: item.name, price: item.price })} className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200">Add to Cart</button>
                <span className="absolute top-2 left-2 bg-yellow-400 text-xs px-2 py-0.5 rounded font-semibold">Recommended</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {recs && recs.length === 0 && <p className="text-gray-600 mt-4 text-center">No recommendations yet. Add some orders to get personalized suggestions!</p>}

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">All Food Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.length > 0 ? filteredItems.map(item => <FoodItem key={item.id || item._id} item={item} addToCart={addToCart} />) : <p className="text-gray-600 text-center col-span-full">No items found.</p>}
        </div>
      </section>
    </div>
  );
}

const FoodItem = ({ item, addToCart }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
    <div className="w-full h-48 overflow-hidden">
      <img src={item.img || item.image || "https://via.placeholder.com/150"} alt={item.name} className="w-full h-full object-cover" />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
      <p className="text-green-700 font-bold mb-2">Rs. {item.price}</p>
      <button onClick={() => addToCart({ id: item._id || item.id, name: item.name, price: item.price })} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200">Add to Cart</button>
    </div>
  </div>
);
