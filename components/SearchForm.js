import React, { useState } from "react";

export default function SearchForm() {
  const [searchValue, setSearchValue] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [marketplaceFilter, setMarketplaceFilter] = useState("");
  const [blockchainFilter, setBlockchainFilter] = useState("");
  const [currencyFilter, setCurrencyFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: 1000 });
  const [showFilters, setShowFilters] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search with searchValue, categoryFilter, marketplaceFilter, blockchainFilter, currencyFilter, priceFilter here
  };

  return (
    <form onSubmit={handleSubmit} className="text-gray-700">
      <div className="mb-6 relative">
        <svg
          className="h-6 absolute top-2 left-4 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input
          className="w-full rounded-full pl-12 py-2 bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          placeholder="Search for NFTs, collections and more"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-500 text-white rounded-full py-2 px-4 hover:bg-indigo-600"
      >
        Search
      </button>
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="ml-4 text-indigo-500"
      >
        Advanced filters
      </button>
      {showFilters && (
        <div className="flex flex-wrap -mx-3 mt-4">
          <div className="w-1/2 px-3 mb-6">
            <label className="block text-gray-700 mb-2">Category:</label>
            <input
              className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="e.g. art or music"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            />
          </div>
          <div className="w-1/2 px-3 mb-6">
            <label className="block text-gray-700 mb-2">Marketplace:</label>
            <input
              className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="e.g. OpenSea"
              value={marketplaceFilter}
              onChange={(e) => setMarketplaceFilter(e.target.value)}
            />
          </div>
          <div className="w-1/2 px-3 mb-6">
            <label className="block text-gray-700 mb-2">Blockchain:</label>
            <input
              className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="e.g. ethereum"
              value={blockchainFilter}
              onChange={(e) => setBlockchainFilter(e.target.value)}
            />
          </div>
          <div className="w-1/2 px-3 mb-6">
            <label className="block text-gray-700 mb-2">Currency:</label>
            <input
              className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="e.g. ETH or MATIC"
              value={currencyFilter}
              onChange={(e) => setCurrencyFilter(e.target.value)}
            />
          </div>
          <div className="w-1/2 px-3 mb-6">
            <label className="block text-gray-700 mb-2">
              Price (min, max):
            </label>
            <div className="flex">
              <input
                className="w-1/2 rounded-full px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500 mr-2"
                type="text"
                value={priceFilter.min}
                onChange={(e) =>
                  setPriceFilter({ ...priceFilter, min: e.target.value })
                }
              />
              <input
                className="w-1/2 rounded-full px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                value={priceFilter.max}
                onChange={(e) =>
                  setPriceFilter({ ...priceFilter, max: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
