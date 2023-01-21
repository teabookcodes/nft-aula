import Layout from "../components/Layout";
import SearchCard from "../components/SearchCard";
import NftCard from "../components/NftCard";
import { useUser } from "@supabase/auth-helpers-react";
import LoginPage from "./login";

export default function Home() {
  const session = useUser();

  if (!session) {
    return <LoginPage />;
  }

  return (
    <Layout>
      <SearchCard />
      <NftCard />
    </Layout>
  );
}
