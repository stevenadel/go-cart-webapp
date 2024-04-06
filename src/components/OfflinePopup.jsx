import React from "react";

const OfflinePopup = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <p className="text-lg font-semibold mb-4">Offline</p>
        <p className="text-gray-700">You are currently offline. Please check your internet connection.</p>
      </div>
    </div>
  );
};

export default OfflinePopup;
