import Layout from "../components/Layout";
import NftCard from "../components/NftCard";

export default function SavedNftsPage() {
  return (
    <Layout>
      <h1 className="text-5xl mb-4 text-gray-800 text-center md:text-left">
        Saved NFTs
      </h1>
      <NftCard />
      <NftCard />
    </Layout>
  );
}
