import { useState } from "react";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProfileOrders from "../components/profile/ProfileOrders";
import ProfileWishlist from "../components/profile/ProfileWishlist";

function Profile() {
  const [activeTab, setActiveTab] = useState('profile-info');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex flex-col">
      <ul className="flex mb-4 border-b border-gray-600 justify-center gap-20">
        <li
          className={`px-3 py-2 font-semibold text-xl cursor-pointer ${activeTab === 'profile-info' ? 'text-brandBlue' : 'text-gray-600'
            }`}
          onClick={() => handleTabClick('profile-info')}
        >
          Profile Info
        </li>
        <li
          className={`px-3 py-2 font-semibold text-xl cursor-pointer ${activeTab === 'orders' ? 'text-brandBlue' : 'text-gray-600'
            }`}
          onClick={() => handleTabClick('orders')}
        >
          Orders
        </li>
        <li
          className={`px-3 py-2 font-semibold text-xl cursor-pointer ${activeTab === 'wishlist' ? 'text-brandBlue' : 'text-gray-600'
            }`}
          onClick={() => handleTabClick('wishlist')}
        >
          Wishlist
        </li>
      </ul>
      <div className="flex-grow">
        <div className={`p-4 rounded shadow-sm ${activeTab === 'profile-info' ? 'block' : 'hidden'}`}>
          <ProfileInfo></ProfileInfo>
        </div>
        <div className={`p-4 rounded shadow-sm ${activeTab === 'orders' ? 'block' : 'hidden'}`}>
          <ProfileOrders></ProfileOrders>
        </div>
        <div className={`p-4 rounded shadow-sm ${activeTab === 'wishlist' ? 'block' : 'hidden'}`}>
          <ProfileWishlist></ProfileWishlist>
        </div>
      </div>
    </div>
  );
};

export default Profile;
