import Layout from "../components/Layout";
import NftCard from "../components/NftCard";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";

export default function SavedNftsPage() {
  const [nfts, setNfts] = useState([]);
  const supabase = useSupabaseClient();
  const session = useSession();

  useEffect(() => {
    if (!session?.user?.id) {
      return;
    }
    supabase
      .from("saved_nfts")
      .select("nft_id")
      .eq("user_id", session.user.id)
      .then((result) => {
        const nftsIds = result.data.map((item) => item.nft_id);
        supabase
          .from("nfts")
          .select("*")
          .in("id", nftsIds)
          .then((result) => setNfts(result.data));
      });
  }, [supabase, session?.user?.id]);

  return (
    <Layout>
      <h1 className="text-5xl mb-4 text-gray-800 text-center md:text-left">
        Saved NFTs
      </h1>
      {nfts.length > 0 &&
        nfts.map((nft) => (
          <div key={nft.id}>
            <NftCard {...nft} />
          </div>
        ))}
    </Layout>
  );
}
