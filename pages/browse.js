import Layout from "../components/Layout";
import Card from "../components/Card";
import NftCard from "../components/NftCard";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import React, { useEffect, useState } from "react";

export default function BrowsePage() {
  const supabase = useSupabaseClient();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [marketplaceFilter, setMarketplaceFilter] = useState("");
  const [blockchainFilter, setBlockchainFilter] = useState("");
  const [currencyFilter, setCurrencyFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: 9999 });
  const [sortFilter, setSortFilter] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [nfts, setNfts] = useState([]);
  const [filteredNfts, setFilteredNfts] = useState([]);

  useEffect(() => {
    supabase
      .from("nfts")
      .select("*")
      .order("created_at", { ascending: false })
      .then((result) => {
        setNfts(result.data);
      });
  }, [supabase]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let query = supabase.from("nfts").select();
    if (searchTerm) {
      query = query.ilike("nftName", `%${searchTerm}%`);
    }
    if (categoryFilter) {
      query = query.eq("category", categoryFilter);
    }
    if (marketplaceFilter) {
      query = query.eq("marketplace", marketplaceFilter);
    }
    if (blockchainFilter) {
      query = query.eq("blockchain", blockchainFilter);
    }
    if (currencyFilter) {
      query = query.eq("currency", currencyFilter);
    }
    if (priceFilter.min !== 0) {
      query = query.gte("price", priceFilter.min);
    }
    if (priceFilter.max !== 9999) {
      query = query.lte("price", priceFilter.max);
    }

    if (sortFilter === "Newest") {
      query = query.order("created_at", { ascending: false });
    }
    if (sortFilter === "Oldest") {
      query = query.order("created_at", { ascending: true });
    }

    const { data, error } = await query;
    if (!error) {
      setFilteredNfts(data);
    }
  };

  return (
    <Layout>
      <h1 className="text-4xl mb-4 text-gray-800 text-center md:text-left">
        Browse the art
      </h1>
      <Card>
        <div className="md:relative flex items-center">
          <svg
            className="hidden md:block h-6 absolute top-2 left-4 text-gray-400"
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
            className="w-full rounded-full pl-4 md:pl-12 py-2 bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
            type="text"
            placeholder="Search for NFTs, collections and more"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="bg-indigo-500 text-white rounded-full ml-3 py-2 px-3 md:px-4 hover:bg-indigo-600"
            onClick={handleSubmit}
          >
            <svg
              className="md:hidden h-6 text-white"
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
            <span className="hidden md:block">Search</span>
          </button>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="bg-white rounded-full ml-2 py-2 px-2"
          >
            <svg
              className="h-6 text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
          </button>
        </div>
      </Card>
      {showFilters && (
        <Card>
          <div className="flex flex-wrap -mx-3">
            <div className="w-1/2 px-3 mb-6">
              <label className="block text-gray-700 mb-2">Category:</label>
              <select
                className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
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
            <div className="w-1/2 px-3 mb-6">
              <label className="block text-gray-700 mb-2">Marketplace:</label>
              <select
                className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
                value={marketplaceFilter}
                onChange={(e) => setMarketplaceFilter(e.target.value)}
              >
                <option value="">Please select a marketplace</option>
                <option value="Foundation">Foundation</option>
                <option value="KnownOrigin">KnownOrigin</option>
                <option value="MagicEden">MagicEden</option>
                <option value="Mintable">Mintable</option>
                <option value="Nifty Gateway">Nifty Gateway</option>
                <option value="OnePlanet NFT">OnePlanet NFT</option>
                <option value="OpenSea">OpenSea</option>
                <option value="Rarible">Rarible</option>
                <option value="SuperRare">SuperRare</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="w-1/2 px-3 mb-6">
              <label className="block text-gray-700 mb-2">Blockchain:</label>
              <select
                className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
                value={blockchainFilter}
                onChange={(e) => setBlockchainFilter(e.target.value)}
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
            <div className="w-1/2 px-3 mb-6">
              <label className="block text-gray-700 mb-2">Currency:</label>
              <select
                className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
                value={currencyFilter}
                onChange={(e) => setCurrencyFilter(e.target.value)}
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
            <div className="w-1/2 px-3 mb-2">
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
            <div className="w-1/2 px-3 mb-6">
              <label className="block text-gray-700 mb-2">Sort by:</label>
              <select
                className="w-1/2 rounded-full px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
                value={sortFilter}
                onChange={(e) => setSortFilter(e.target.value)}
              >
                <option value="">Default</option>
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
              </select>
            </div>
          </div>
        </Card>
      )}
      {/* <div className="mt-8 flex gap-12"> */}
      {filteredNfts?.length > 0 ? (
        filteredNfts.map((nft) => <NftCard key={nft.created_at} {...nft} />)
      ) : filteredNfts && filteredNfts.length === 0 ? (
        <div>No NFTs found based on the current filters.</div>
      ) : (
        nfts.map((nft) => <NftCard key={nft.created_at} {...nft} />)
      )}

      {/* </div> */}
    </Layout>
  );
}
