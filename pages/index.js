import Layout from "../components/Layout";
import Card from "../components/Card";
import CookieConsentBar from "../components/CookieConsentBar";
import { useSession } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";

export default function Home() {
  const session = useSession();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    if (!session) {
      return;
    } else {
      setUserEmail(session.user.email);
    }
  }, [session?.user?.email, session]);

  return (
    <Layout>
      {/* <h1 className="text-4xl mb-4 text-gray-800 text-center md:text-left">
        Home
      </h1> */}
      <Card marginBottom={true}>
        {session && (
          <p>
            Hello,{" "}
            <span className="font-semibold text-aulaBlack">{userEmail}</span>!
          </p>
        )}
        {!session && (
          <p>
            Welcome to the
            <span className="font-semibold text-aulaBlack"> NFTaula</span>!
          </p>
        )}
      </Card>
      <Card>
        <h3 className="text-2xl font-semibold text-aulaBlack">What is NFTaula.io? ✨</h3>

        <span className="block my-4 text-xl font-semibold">Are you an NFT creator?</span>

        <p>Sign up easily and quickly with your email. After logging in, you can freely post your NFTs that you want to sell and showcase to collectors.

          You can upload an image of your NFT and provide details such as: Name of the NFT, Collection name, Description, Category, Marketplace, Blockchain, Currency, Price, Link to marketplace, Link to collection on marketplace, Twitter link, Website link.

          You can edit or delete your NFTs at any time in your profile. Unleash your creativity and share it with the world.</p>

        <p className="block mt-2 font-semibold">Show off your NFT on NFTaula.io! 🎨</p>

        <span className="block my-4 text-xl font-semibold">Are you an NFT collector or even addicted to NFTs?</span>

        <p>Visit NFTaula.io and search for individual NFTs or entire collections directly from creators, all in one place.
          NFT creators will showcase their NFTs here, including links to marketplaces where you can purchase NFTs, links to entire collections, and links to their website and Twitter.
          <br />
          You can also use advanced searching by Category, Marketplace, Blockchain, Currency, or Price (min, max).

          If you are interested in any NFT, you can save it to your favorites and return to it anytime.</p>

        <p className="block mt-2 font-semibold">Enjoy the hunt! 🔍💰</p>

        <h3 className="text-3xl font-semibold text-aulaBlack my-4 text-center">🏆 Welcome to NFTaula.io! 🏆</h3>

        <img className="w-full rounded-md mt-4 mx-auto" src="https://i.seadn.io/gcs/files/e793849eb6d6f78ab7d4f67f0f5daedc.jpg?auto=format&w=1000" alt="Argentina Champion NFT owned by Bagari" title="Argentina Champion NFT owned by Bagari" />
      </Card>
      <CookieConsentBar />
    </Layout>
  );
}
