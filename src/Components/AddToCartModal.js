import React from "react";

const AddToCartModal = ({ productModal }) => {
  const { name, img, quantity, price, description } = productModal;
  return (
    <div>
      <input type="checkbox" id="addToCartModal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box relative ">
          <label
            htmlFor="addToCartModal"
            className="btn btn-sm btn-circle btn-primary absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="lg:flex items-center ">
            <figure>
              <img className="" src={img} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>{description}</p>
              <p className="text-primary">$ {price}</p>
              <p className="text-sm">Available: {quantity}</p>
              <input
                type="number"
                min={1}
                placeholder="Quantity"
                className="input input-bordered input-primary rounded-full w-full max-w-xs"
              />
              <div className="card-actions">
                <button className="btn btn-primary rounded-full px-12 w-full">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
