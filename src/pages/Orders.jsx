import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from '../store/slices/OrderSlice.js';

const Orders = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      {loading && <div className="text-center text-blue-500 font-bold">Loading...</div>}
      {error && <div className="text-center text-red-500 font-bold">Error: {error}</div>}

      {orders.map((order) => (
        <div key={order.id} className="bg-gray-50 dark:bg-gray-800 w-full rounded-lg shadow-md overflow-hidden mb-6">
          <div className="py-6 px-6 md:p-8">
            <div className="flex justify-start item-start space-y-2 flex-col">
              <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order #{order.id}</h1>
              <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">{new Date(order.created_at).toLocaleString()}</p>
            </div> 
            <div className="mt-10 flex flex-col xl:flex-row justify-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
              {order.products.map((product, index) => (
                <div key={index} className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                  <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                    <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">{product.name}</p>
                    <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                      <div className="pb-4 md:pb-8 w-full md:w-40">
                        <img className="w-full hidden md:block" src={product.image} alt={product.name} />
                        <img className="w-full md:hidden" src={product.image} alt={product.name} />
                      </div>
                      <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                          <div className="flex justify-start items-start flex-col space-y-2">
                            <p className="text-sm dark:text-white leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-300">Price: </span>{product.price}</p>
                            <p className="text-sm dark:text-white leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-300">Description: </span>{product.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Order Summary</h3>
                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                  <div className="flex justify-between w-full">
                    <p className="text-base dark:text-white leading-4 text-gray-800">Total Price:</p>
                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">{order.total_price}</p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-base dark:text-white leading-4 text-gray-800">Status:</p>
                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">{order.status}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
