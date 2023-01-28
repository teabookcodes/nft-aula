import React from "react";
import { useEffect, useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

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
  const [upload, setUpload] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const supabase = useSupabaseClient();
  const session = useSession();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform upload with nftName, collection, categoryTags, marketplace, blockchain, currency, price, marketplaceLink, collectionTwitter, collectionWebsite, and nftImage here
  };

  async function addNftImage(e) {
    const files = e.target.files;
    if (files.length > 0) {
      setIsUploading(true);
      for (const file of files) {
        const newName = Date.now() + file.name;
        const result = await supabase.storage
          .from("nfts")
          .upload(newName, file);
        if (result.data) {
          const url =
            process.env.NEXT_PUBLIC_SUPABASE_URL +
            "/storage/v1/object/public/nfts/" +
            result.data.path;
          setUpload(url);
        }
      }
      setIsUploading(false);
    }
  }

  function submitForm() {
    supabase
      .from("nfts")
      .insert({
        author: session.user.id,
        nftName,
        collection,
        categoryTags,
        marketplace,
        blockchain,
        currency,
        price,
        marketplaceLink,
        collectionTwitter,
        collectionWebsite,
        nftImage: upload,
      })
      .then((response) => {
        if (!response.error) {
          setNftName("");
          setCollection("");
          setCategoryTags("");
          setMarketplace("");
          setBlockchain("");
          setCurrency("");
          setPrice("");
          setMarketplaceLink("");
          setCollectionTwitter("");
          setCollectionWebsite("");
          setUpload("");
          alert("NFT succesfully uploaded!");
        }
      });
  }

  return (
    <form onSubmit={handleSubmit} className="text-gray-700">
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Name of the NFT:</label>
        <input
          className="w-full rounded-full px-4 py-2 bg-gray-200 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          value={nftName}
          onChange={(e) => setNftName(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Collection:</label>
        <input
          className="w-full rounded-full px-4 py-2 bg-gray-200 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          value={collection}
          onChange={(e) => setCollection(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="flex gap-2 justify-center w-full rounded-full p-3 bg-indigo-500 text-white">
          <input type="file" className="hidden" onChange={addNftImage} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          Click to upload NFT Image
        </label>
      </div>
      {isUploading && <div className="mb-6">Uploading... please wait</div>}
      {upload.length > 0 && (
        <div className="flex justify-center mb-6">
          <div>
            <img src={upload} alt="" className="w-full h-auto rounded-md" />
          </div>
        </div>
      )}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Category tags:</label>
        <input
          className="w-full rounded-full px-4 py-2 bg-gray-200 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          value={categoryTags}
          onChange={(e) => setCategoryTags(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Marketplace:</label>
        <input
          className="w-full rounded-full px-4 py-2 bg-gray-200 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          value={marketplace}
          onChange={(e) => setMarketplace(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Blockchain:</label>
        <input
          className="w-full rounded-full px-4 py-2 bg-gray-200 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          value={blockchain}
          onChange={(e) => setBlockchain(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Currency:</label>
        <input
          className="w-full rounded-full px-4 py-2 bg-gray-200 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Price:</label>
        <input
          className="w-full rounded-full px-4 py-2 bg-gray-200 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Link to marketplace:</label>
        <input
          className="w-full rounded-full px-4 py-2 bg-gray-200 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
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
          className="w-full rounded-full px-4 py-2 bg-gray-200 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
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
          className="w-full rounded-full px-4 py-2 bg-gray-200 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          value={collectionWebsite}
          onChange={(e) => setCollectionWebsite(e.target.value)}
        />
      </div>
      <div className="flex w-full justify-center md:justify-start">
        <button
          type="submit"
          className="bg-indigo-500 text-white rounded-full py-2 px-4 hover:bg-indigo-600"
          onClick={submitForm}
        >
          Upload
        </button>
      </div>
    </form>
  );
}
