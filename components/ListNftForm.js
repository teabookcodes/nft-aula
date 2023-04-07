import React from "react";
import { useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

export default function ListNftForm() {
  const [nftName, setNftName] = useState("");
  const [collection, setCollection] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [marketplace, setMarketplace] = useState("");
  const [blockchain, setBlockchain] = useState("");
  const [currency, setCurrency] = useState("");
  const [price, setPrice] = useState("");
  const [marketplaceLink, setMarketplaceLink] = useState("");
  const [collectionTwitter, setCollectionTwitter] = useState("");
  const [collectionLink, setCollectionLink] = useState("");
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

  // Form submit function

  function submitForm() {
    const nftNameRegex = /^[a-zA-Z0-9\s#]+$/;
    const alphanumericRegex = /^[a-zA-Z0-9\s]+$/;
    const numericRegex = /^[\d,.]+$/;
    const linkRegex = /^(https?:\/\/)?(?!twitter\.com)[^\s]+\.[^\s]+$/;

    if (!nftNameRegex.test(nftName)) {
      alert("Please enter a valid NFT name.");
      return;
    }

    if (!alphanumericRegex.test(collection)) {
      alert("Please enter a valid collection name.");
      return;
    }

    if (upload === "") {
      alert("Please upload an NFT image.");
      return;
    }

    if (category === "") {
      alert("Please select a value for category.");
      return;
    }

    if (marketplace === "") {
      alert("Please select a value for marketplace.");
      return;
    }

    if (blockchain === "") {
      alert("Please select a value for blockchain.");
      return;
    }

    if (currency === "") {
      alert("Please select a value for currency.");
      return;
    }

    if (!numericRegex.test(price)) {
      alert("Please enter a valid price.");
      return;
    }

    if (marketplaceLink) {
      if (!linkRegex.test(marketplaceLink)) {
        alert("Please enter a valid marketplace link.");
        return;
      } else if (/^https?:\/\/(twitter\.com)[^\s]+$/.test(marketplaceLink)) {
        alert("Marketplace link cannot be a Twitter link.");
        return;
      }
    } else {
      alert("Please enter a valid marketplace link.");
      return;
    }

    if (collectionLink) {
      if (!linkRegex.test(collectionLink)) {
        alert("Please enter a valid collection link.");
        return;
      } else if (/^https?:\/\/(twitter\.com)[^\s]+$/.test(collectionLink)) {
        alert("Collection link cannot be a Twitter link.");
        return;
      }
    } else {
      alert("Please enter a valid collection link.");
      return;
    }

    if (collectionWebsite) {
      if (!linkRegex.test(collectionWebsite)) {
        alert("Please enter a valid website link.");
        return;
      } else if (/^https?:\/\/(twitter\.com)[^\s]+$/.test(collectionWebsite)) {
        alert("Collection website link cannot be a Twitter link.");
        return;
      }
    }

    // If input values are valid, insert data into Supabase

    supabase
      .from("nfts")
      .insert({
        author: session.user.id,
        nftName,
        collection,
        description,
        category,
        marketplace,
        blockchain,
        currency,
        price,
        marketplaceLink,
        collectionTwitter,
        collectionLink,
        collectionWebsite,
        nftImage: upload,
      })
      .then((response) => {
        if (!response.error) {
          setNftName("");
          setCollection("");
          setDescription("");
          setCategory("");
          setMarketplace("");
          setBlockchain("");
          setCurrency("");
          setPrice("");
          setMarketplaceLink("");
          setCollectionTwitter("");
          setCollectionLink("");
          setCollectionWebsite("");
          setUpload("");
          alert("NFT succesfully uploaded!");
          window.location.reload();
          window.scrollTo(0, 0);
        } else {
          alert(
            "NFT could not be uploaded due to an error. You must fill in all fields correctly!"
          );
        }
      });
  }

  return (
    <form onSubmit={handleSubmit} className="text-gray-700">
      <div className="mb-6">
        <label className="block text-aulaBlack uppercase mb-2">Name of the NFT:</label>
        <input
          className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-indigo-500"
          type="text"
          value={nftName}
          onChange={(e) => setNftName(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-aulaBlack uppercase mb-2">Collection name:</label>
        <input
          className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-indigo-500"
          type="text"
          value={collection}
          onChange={(e) => setCollection(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 dark:text-gray-50 uppercase mb-2">Description:</label>
        <textarea
          className="w-full rounded-md px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-indigo-500"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
        <label className="block text-aulaBlack uppercase mb-2">Category:</label>
        <select
          className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-indigo-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Please select a category</option>
          <option value="Art">Art</option>
          <option value="Celebrities">Celebrities</option>
          <option value="Collectibles">Collectibles</option>
          <option value="Domain Names">Domain Names</option>
          <option value="Gaming">Gaming</option>
          <option value="Memberships">Memberships</option>
          <option value="Memes">Memes</option>
          <option value="Music">Music</option>
          <option value="PFPs">PFPs (Profile Pictures)</option>
          <option value="Photography">Photography</option>
          <option value="Sports">Sports</option>
          <option value="Trading Cards">Trading Cards</option>
          <option value="Utility">Utility</option>
          <option value="Video">Video</option>
          <option value="Virtual Worlds">Virtual Worlds</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block text-aulaBlack uppercase mb-2">Marketplace:</label>
        <select
          className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-indigo-500"
          value={marketplace}
          onChange={(e) => setMarketplace(e.target.value)}
        >
          <option value="">Please select a marketplace</option>
          <option value="Blur">Blur</option>
          <option value="Foundation">Foundation</option>
          <option value="KnownOrigin">KnownOrigin</option>
          <option value="MagicEden">MagicEden</option>
          <option value="Mintable">Mintable</option>
          <option value="Nifty Gateway">Nifty Gateway</option>
          <option value="Objkt.com">Objkt.com</option>
          <option value="OnePlanet NFT">OnePlanet NFT</option>
          <option value="OpenSea">OpenSea</option>
          <option value="Rarible">Rarible</option>
          <option value="SuperRare">SuperRare</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block text-aulaBlack uppercase mb-2">Blockchain:</label>
        <select
          className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-indigo-500"
          value={blockchain}
          onChange={(e) => setBlockchain(e.target.value)}
        >
          <option value="">Please select a blockchain</option>
          <option value="BNB">Binance Chain (BNB)</option>
          <option value="Ethereum">Ethereum</option>
          <option value="Flow">Flow</option>
          <option value="Polygon">Polygon</option>
          <option value="Solana">Solana</option>
          <option value="Tezos">Tezos</option>
          <option value="WAX">Worldwide Asset Exchange (WAX)</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block text-aulaBlack uppercase mb-2">Currency:</label>
        <select
          className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-indigo-500"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="">Please select a currency</option>
          <option value="BNB">Binance Coin (BNB)</option>
          <option value="DAI">DAI</option>
          <option value="ETH">Ether (ETH)</option>
          <option value="FLOW">FLOW</option>
          <option value="MATIC">MATIC</option>
          <option value="SOL">Solana (SOL)</option>
          <option value="XTZ">Tezos (XTZ)</option>
          <option value="UNI">UNI</option>
          <option value="USDC">USDC</option>
          <option value="WAX">WAX</option>
          <option value="WETH">Wrapped Ether (WETH)</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block text-aulaBlack uppercase mb-2">Price:</label>
        <input
          className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-indigo-500"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-aulaBlack uppercase mb-2">Link to your NFT on the marketplace:</label>
        <input
          className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-indigo-500"
          type="text"
          placeholder="https://marketplace.io/yournft"
          value={marketplaceLink}
          onChange={(e) => setMarketplaceLink(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-aulaBlack uppercase mb-2">
          Link to collection on the marketplace:
        </label>
        <input
          className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-indigo-500"
          type="text"
          placeholder="https://marketplace.io/yourcollection"
          value={collectionLink}
          onChange={(e) => setCollectionLink(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 dark:text-gray-50 uppercase mb-2">Twitter:</label>
        <input
          className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-indigo-500"
          type="text"
          placeholder="https://twitter.com/yourcollection"
          value={collectionTwitter}
          onChange={(e) => setCollectionTwitter(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 dark:text-gray-50 uppercase mb-2">Website:</label>
        <input
          className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-indigo-500"
          type="text"
          placeholder="https://yourcollectionwebsite.com"
          value={collectionWebsite}
          onChange={(e) => setCollectionWebsite(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <p className="text-sm text-aulaBlack">* Values marked with color are required</p>
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
