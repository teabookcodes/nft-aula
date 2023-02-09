import Layout from "../components/Layout";
import Card from "../components/Card";
import ListNftForm from "../components/ListNftForm";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl mb-4 text-gray-800 text-center md:text-left">
        List new NFT
      </h1>
      <Card>
        <ListNftForm />
      </Card>
    </Layout>
  );
}