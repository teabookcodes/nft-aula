// import Layout from "../components/Layout";
// import Card from "../components/Card";
// import NftCard from "../components/NftCard";
// import { useSupabaseClient } from "@supabase/auth-helpers-react";
// import React, { useEffect, useState } from "react";

// export default function BrowsePage() {
//   const supabase = useSupabaseClient();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [nfts, setNfts] = useState([]);

//   useEffect(() => {
//     supabase
//       .from("nfts")
//       .select("*")
//       .order("created_at", { ascending: false })
//       .then((result) => {
//         setNfts(result.data);
//       });
//   }, [supabase]);

//   return (
//     <Layout>
//       <h1 className="text-5xl mb-4 text-gray-800 text-center md:text-left">
//         Browse the art
//       </h1>
//       <Card>
//         {/* <SearchForm /> */}
//         <div className="relative flex gap-3 items-center">
//           <svg
//             className="h-6 absolute top-2 left-4 text-gray-400"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
//             />
//           </svg>
//           <input
//             className="w-full rounded-full pl-12 py-2 bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
//             type="text"
//             placeholder="Search for NFTs, collections and more"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button
//             type="submit"
//             className="bg-indigo-500 text-white rounded-full py-2 px-4 hover:bg-indigo-600"
//           >
//             Search
//           </button>
//         </div>
//       </Card>
//       {nfts?.length > 0 &&
//         nfts.map((nft) => <NftCard key={nft.created_at} {...nft} />)}
//     </Layout>
//   );
// }

import Layout from "../components/Layout";
import Card from "../components/Card";
import NftCard from "../components/NftCard";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import React, { useEffect, useState } from "react";

export default function BrowsePage() {
  const supabase = useSupabaseClient();
  const [searchTerm, setSearchTerm] = useState("");
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
    const { data, error } = await supabase
      .from("nfts")
      .select("*")
      .textSearch("nftName", searchTerm);
    if (!error) {
      setFilteredNfts(data);
    }
  };

  return (
    <Layout>
      <h1 className="text-5xl mb-4 text-gray-800 text-center md:text-left">
        Browse the art
      </h1>
      <Card>
        <div className="md:relative flex gap-3 items-center">
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
            className="bg-indigo-500 text-white rounded-full py-2 px-3 md:px-4 hover:bg-indigo-600"
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
        </div>
      </Card>
      {/* <div className="mt-8 flex gap-12"> */}
      {filteredNfts?.length > 0
        ? filteredNfts.map((nft) => <NftCard key={nft.created_at} {...nft} />)
        : nfts.map((nft) => <NftCard key={nft.created_at} {...nft} />)}
      {/* </div> */}
    </Layout>
  );
}
