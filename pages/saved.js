import Layout from "../components/Layout";
import NftCard from "../components/NftCard";
import Card from "../components/Card";
import Footer from "../components/Footer";
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
          .order("created_at", { ascending: false })
          .then((result) => setNfts(result.data));
      });
  }, [supabase, session?.user?.id]);

  return (
    <Layout>
      {/* <h1 className="text-4xl mb-4 text-gray-800 text-center md:text-left">
        Saved NFTs
      </h1> */}
      {!session && (
        <Card>
          <p>You must login first to view your saved NFTs.</p>
        </Card>
      )}
      {session && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {nfts.length > 0 &&
            nfts.map((nft) => (
              <div key={nft.id}>
                <NftCard {...nft} />
              </div>
            ))}
        </div>
      )}
      <Footer />
    </Layout>
  );
}
