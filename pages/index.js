import Layout from "../components/Layout";
import SearchCard from "../components/SearchCard";
import NftCard from "../components/NftCard";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import LoginPage from "./login";
import { useEffect, useState } from "react";

export default function Home() {
  const supabase = useSupabaseClient();
  const session = useSession();
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    supabase
      .from("nfts")
      .select("*")
      .order("created_at", { ascending: false })
      .then((result) => {
        console.log("nfts", result);
        setNfts(result.data);
      });
  });

  if (!session) {
    return <LoginPage />;
  }

  return (
    <Layout>
      <SearchCard />
      {nfts?.length > 0 &&
        nfts.map((nft) => <NftCard key={nft.created_at} {...nft} />)}
    </Layout>
  );
}
