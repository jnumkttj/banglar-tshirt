import React from "react";

const Tshirt = ({ tshirt, handleAddToCart }) => {
  const { name, picture, price } = tshirt;
  return (
    <div>
      <div className="card w-80 bg-base-100 border shadow-xl">
        <figure className="h-96">
          <img className="p-4"
            src={picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge">NEW</div>
          </h2>
          <p>Price: ${price}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
          <div className="card-actions justify-end">
            <button onClick={() => handleAddToCart(tshirt)} className="btn bg-orange-600 border-0 mt-4">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tshirt;
