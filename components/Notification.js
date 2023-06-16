import { useState } from "react";
import Link from "next/link";

const Notification = () => {
  const [closed, setClosed] = useState(false);

  const handleClose = () => {
    setClosed(true);
  };

  return (
    !closed && (
      <div className="flex justify-between p-4 rounded-md bg-indigo-500 shadow-xl shadow-gray-200 dark:shadow-none">
        <div>
          <p className="text-white leading-6">
            📢 Sellers, please ensure your NFT metadata is up to date and remove
            sold NFTs to enhance the user experience.
          </p>
          <p className="text-white leading-6">
            Thank you for your cooperation! 🎨
          </p>
        </div>
        <div>
          <button className="text-white" onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    )
  );
};

export default Notification;
