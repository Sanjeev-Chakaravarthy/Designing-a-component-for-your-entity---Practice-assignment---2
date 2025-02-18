import React from "react";
import ViewProductButton from "./button"; // Importing ViewProductButton

const Productcard = () => {
  // Static product details with correct product images
  const productImage = "https://images.pexels.com/photos/3394659/pexels-photo-3394659.jpeg?auto=compress&cs=tinysrgb&h=300"; 
  const productName = "Wireless Headphones";
  const productPrice = "$79.99";

  return (
    <div className="border rounded-lg p-4 shadow-md text-center bg-white">
      <img src={productImage} alt={productName} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{productName}</h2>
      <p className="text-gray-600">{productPrice}</p>
      <div className="mt-4">
        <ViewProductButton />
      </div>
    </div>
  );
};

export default Productcard;
