import React, { useState } from "react";

export default function UploadForm() {
  const [nftName, setNftName] = useState("");
  const [collection, setCollection] = useState("");
  const [categoryTags, setCategoryTags] = useState("");
  const [marketplace, setMarketplace] = useState("");
  const [blockchain, setBlockchain] = useState("");
  const [currency, setCurrency] = useState("");
  const [price, setPrice] = useState("");
  const [marketplaceLink, setMarketplaceLink] = useState("");
  const [collectionTwitter, setCollectionTwitter] = useState("");
  const [collectionWebsite, setCollectionWebsite] = useState("");
  const [nftImage, setNftImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform upload with nftName, collection, categoryTags, marketplace, blockchain, currency, price, marketplaceLink, collectionTwitter, collectionWebsite, and nftImage here
  };

  return (
    <form onSubmit={handleSubmit} className="text-gray-700">
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Name of the NFT:</label>
        <input
          className="w-full rounded-full p-2 bg-gray-200 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          value={nftName}
          onChange={(e) => setNftName(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Collection:</label>
        <input
          className="w-full rounded-full p-2 bg-gray-200 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          value={collection}
          onChange={(e) => setCollection(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Upload NFT Image:</label>
        <input
          className="w-full rounded-full p-2 pl-8 md:pl-40 bg-gray-200 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
          type="file"
          onChange={(e) => setNftImage(e.target.files[0])}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Category tags:</label>
        <input
          className="w-full rounded-full p-2 bg-gray-200 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          value={categoryTags}
          onChange={(e) => setCategoryTags(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Marketplace:</label>
        <input
          className="w-full rounded-full p-2 bg-gray-200 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          value={marketplace}
          onChange={(e) => setMarketplace(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Blockchain:</label>
        <input
          className="w-full rounded-full p-2 bg-gray-200 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          value={blockchain}
          onChange={(e) => setBlockchain(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Currency:</label>
        <input
          className="w-full rounded-full p-2 bg-gray-200 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Price:</label>
        <input
          className="w-full rounded-full p-2 bg-gray-200 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Link to marketplace:</label>
        <input
          className="w-full rounded-full p-2 bg-gray-200 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          value={marketplaceLink}
          onChange={(e) => setMarketplaceLink(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">
          Twitter of the collection (optional):
        </label>
        <input
          className="w-full rounded-full p-2 bg-gray-200 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          value={collectionTwitter}
          onChange={(e) => setCollectionTwitter(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">
          Website of the collection (optional):
        </label>
        <input
          className="w-full rounded-full p-2 bg-gray-200 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          value={collectionWebsite}
          onChange={(e) => setCollectionWebsite(e.target.value)}
        />
      </div>
      <div className="flex w-full justify-center md:justify-start">
        <button
          type="submit"
          className="bg-indigo-500 text-white rounded-full py-2 px-4 hover:bg-indigo-600"
        >
          Upload
        </button>
      </div>
    </form>
  );
}
