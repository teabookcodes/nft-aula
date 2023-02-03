import Card from "./Card";
import NftCard from "./NftCard";
import SearchForm from "./SearchForm";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";

export default function SearchCard() {
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
  }, [session?.user?.id]);

  return (
    <Card>
      <SearchForm />
    </Card>
    
  );
}
