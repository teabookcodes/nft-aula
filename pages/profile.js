import Layout from "../components/Layout";
import Card from "../components/Card";
import NftCard from "../components/NftCard";
import Router from "next/router";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";

export default function ProfilePage() {
  const supabase = useSupabaseClient();
  const session = useSession();

  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    // if (!session) {
    //   Router.push("/login");
    // }

    if (!session?.user?.id) {
      return;
    } else {
      setUserId(session.user.id);
      setUserEmail(session.user.email);
    }
    supabase
      .from("nfts")
      .select()
      .eq("author", session.user.id)
      .then((result) => {
        const nftsIds = result.data.map((item) => item.id);
        supabase
          .from("nfts")
          .select("*")
          .in("id", nftsIds)
          .then((result) => setNfts(result.data));
      });
  }, [session?.user?.id, session?.user?.email]);

  return (
    <Layout>
      {/* <h1 className="text-4xl mb-4 text-gray-800 text-center md:text-left">
        Profile
      </h1> */}
      {!session && (
        <Card>
          <p>You must login first to view your profile.</p>
        </Card>
      )}
      {session && (
        <Card marginBottom={true}>
          <div className="flex gap-3">
            <div>
              <img
                className="w-24 w-full rounded-md"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                alt="Profile picture"
              />
            </div>
            <div>
              <p>
                <span className="font-semibold text-aulaBlack">User ID:</span>{" "}
                {userId}
              </p>
              <p>
                <span className="font-semibold text-aulaBlack">Email:</span>{" "}
                {userEmail}
              </p>
            </div>
          </div>
        </Card>
      )}
      {session && (
        <div>
          <h3 className="text-2xl text-center font-semibold mt-8 text-aulaBlack">Your NFTs:</h3>
          <div className="mt-4 grid md:grid-cols-3 lg:grid-flow-cols-4 gap-4">
            {nfts.length > 0 &&
              nfts.map((nft) => (
                <div key={nft.id}>
                  <NftCard key={nft.created_at} {...nft} />
                </div>
              ))}
          </div>
        </div>
      )}
    </Layout>
  );
}
