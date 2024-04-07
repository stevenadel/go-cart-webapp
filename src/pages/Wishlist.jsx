import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWishlist,
  removeFromWishlist,
} from "../store/slices/wishlistSlice";

function WishlistPage() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.list);
  const isLoading = useSelector((state) => state.wishlist.isLoading);
  const error = useSelector((state) => state.wishlist.error);

  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);

  const handleRemoveFromWishlist = (productId) => {
    dispatch(removeFromWishlist(productId));
  };

  return (
    <div>
      <h1>Wishlist</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!isLoading && !error && (
        <div className="mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center mt-10 px-8">
            {/* card section */}
            {wishlist?.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-md bg-white shadow-md"
              >
                <img
                  src={item.image} // Assuming you have an image URL in your item data
                  alt={item.name}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-600 mb-2">
                    Description: {item.description}
                  </p>
                  <p className="text-gray-600 mb-2">Price: {item.price}</p>
                  <button
                    onClick={() => handleRemoveFromWishlist(item.id)}
                    className="bg-primary text-white w-full mt-2 py-2 rounded-md shadow-md hover:bg-primary-dark transition duration-300"
                  >
                    Remove from Wishlist
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default WishlistPage;
