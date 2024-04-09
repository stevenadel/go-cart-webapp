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
    <div className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <h2 className="font-manrope font-bold text-3xl sm:text-4xl leading-10 text-black mb-11">
          Your Orders
        </h2>

        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}

        {orders.map((order) => (
          <div key={order.id} className="py-6 border-b border-gray-200 rounded-lg shadow-md mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border-r-2 border-gray-100 pr-4">
                <p className="font-semibold text-gray-600 mb-2">Order ID</p>
                <p className="text-lg font-bold">{order.id}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-600 mb-2">Total Price</p>
                <p className="text-lg font-bold">{order.total_price}</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="font-semibold text-gray-600 mb-2">Products</p>
              {order.products.map((product) => (
                <div key={product.id} className="flex items-center mb-2 border-b border-gray-100">
                  <div className="w-full">
                    <p className="text-center font-bold">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <p className="font-semibold text-gray-600 mb-2">Status</p>
              <p className="text-lg font-bold">{order.status}</p>
            </div>

            <div className="mt-6">
              <p className="font-semibold text-gray-600 mb-2">Created At</p>
              <p className="text-lg font-bold">{new Date(order.created_at).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
