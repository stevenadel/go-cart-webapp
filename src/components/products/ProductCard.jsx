import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCartThunk } from "../../store/slices/cartSlice";
import Button from "../reusables/Button";

const ProductCard = ({ data }) => {
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState("");

    const handleAddToCart = (productId) => {
        dispatch(addToCartThunk({ productId: productId, quantity: 1 }))
            .then((response) => {
                console.log("Add to cart successful:", response);
            })
            .catch((error) => {
                console.error("Add to cart failed:", error);
                if (error.response && error.response.status === 401) {
                    console.log("Unauthorized error detected");
                    setErrorMessage("Please log in to add items to your cart.");
                } else {
                    console.log("Other error detected");
                    setErrorMessage("An error occurred. Please try again later.");
                }
            });
    };
    

    const closeErrorMessage = () => {
        setErrorMessage("");
    };

    return (
        <div className="mb-10">
            {errorMessage && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-md">
                        <p className="text-red-600 font-semibold">{errorMessage}</p>
                        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md" onClick={closeErrorMessage}>
                            Close
                        </button>
                    </div>
                </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 place-items-center mt-10 px-8 ">
                {data.map((product) => (
                    <div data-aos="fade-up" data-aos-delay={product.aosDelay} className="group" key={product.id}>
                        <div className="relative">
                            <img src={product.image} alt="" className="h-[180px] w-[260px] object-cover rounded-md" />
                            <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                                <Button
                                    text={"Add to cart"}
                                    bgColor={"bg-primary"}
                                    textColor={"text-white"}
                                    handler={() => handleAddToCart(product.id)}
                                />
                            </div>
                        </div>
                        <div className="leading-7">
                            <h2 className="font-semibold">{product.name}</h2>
                            <h2 className="font-bold">${product.price}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCard;
