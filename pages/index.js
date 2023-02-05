import Layout from "../components/Layout";
import Card from "../components/Card";
import { useSession } from "@supabase/auth-helpers-react";
import LoginPage from "./login";

export default function Home() {
  const session = useSession();

  if (!session) {
    return <LoginPage />;
  }

  return (
    <Layout>
      <h1 className="text-4xl mb-4 text-gray-800 text-center md:text-left">
        Home
      </h1>
      <Card></Card>
    </Layout>
  );
}
