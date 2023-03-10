import Layout from "../components/Layout";
import Card from "../components/Card";
import ListNftForm from "../components/ListNftForm";
import { useSession } from "@supabase/auth-helpers-react";

export default function Home() {
  const session = useSession();

  return (
    <Layout>
      {/* <h1 className="text-4xl mb-4 text-gray-800 text-center md:text-left">
        List new NFT
      </h1> */}
      {!session && (
        <Card>
          <p>You must login first to list a new NFT.</p>
        </Card>
      )}
      {session && (
        <Card>
          <ListNftForm />
        </Card>
      )}
    </Layout>
  );
}
