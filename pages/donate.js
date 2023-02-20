import Card from "../components/Card";
import Layout from "../components/Layout";
import Link from "next/link";

export default function DonatePage() {
    return (
        <Layout>
            <Card>
                <h1 className="text-xl font-semibold text-aulaBlack">Donate</h1>
                <p className="block mt-4 mb-4">
                    At NFTaula.io we believe in supporting and empowering the NFT community. Our goal is to provide a platform for NFT creators to showcase their work for free and for collectors to discover new and exciting NFTs.
                </p>
                <p>
                    If you like the NFTaula site and would like us supported, you can now contribute in different cryptocurrencies. Your contributions will help us maintain and improve the site and ensure that the NFT community continues to thrive.
                </p>

                <p className="block my-4">Thank you for your support! </p>

                <Link className="font-semibold text-aulaBlack" href="https://twitter.com/NFTbagari" target="_blank">@NFTbagari</Link>


            </Card>
        </Layout>
    );
} 