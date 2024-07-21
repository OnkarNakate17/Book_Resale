import React from "react";
import { Link } from "react-router-dom";

function Cards({ item }) {
  return (
    <>
    <div className="mt-4 my-3 p-3">
  <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
    <figure>
      <img
        src={item.image || 'placeholder.jpg'} // Placeholder image or item image
        alt="Shoes"
        className="w-full h-auto" // Maintain aspect ratio
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        {item.name || 'Product Name'} {/* Placeholder for product name */}
        <div className="badge bg-green-600 badge-secondary">
          {item.category1 || 'Category'} {/* Placeholder for category */}
        </div>
      </h2>
      <p>
        {item.title || 'Product Description'} {/* Placeholder for product description */}
      </p>
      <div className="card-actions justify-between">
        <div className="badge badge-outline">
          ${item.price || 'Price'} {/* Placeholder for price */}
        </div>
        <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-green-500 hover:text-white duration-200">
          <Link to="/buy">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default Cards;
