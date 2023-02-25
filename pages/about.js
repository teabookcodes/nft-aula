import Card from "../components/Card";
import Layout from "../components/Layout";
import Link from "next/link";

export default function PrivacyPolicyPage() {
    return (
        <Layout>
            <Card>
                <div className="text-center md:text-left">
                    <h1 className="text-xl font-semibold text-aulaBlack">About</h1>

                    <h2>THE STORY OF ME AND NFTAULA.IO</h2>
                    <br />
                    <img className="rounded-md mx-auto md:mx-0 mb-4" src="https://pbs.twimg.com/profile_images/1622072686284312576/IahrC2Ed_400x400.jpg" alt="NFTbagari" />
                    <p className="block mb-2">I am a passionate NFT collector and creator, known on Twitter as <Link className="font-semibold text-aulaBlack" href="https://twitter.com/NFTbagari" target="_blank">@NFTbagari</Link>.</p>
                    <p className="block mb-2">I have been creating NFTs and I know firsthand how difficult it is not only to create them, but even more difficult to sell them.</p>
                    <p className="block mb-4">However, as a collector myself, I understand the thrill and excitement that comes with discovering new NFTs to add to my collection.</p>
                    <p className="block mb-2">That&apos;s why I created NFTaula.io - <strong>to provide a platform for NFT creators to showcase their work and for collectors like myself to easily browse and discover new pieces to add to our collections.</strong>
                    </p>
                    <p className="block mb-2">I believe that NFTs have the power to revolutionize the way we think about digital ownership and art.</p>
                    <p className="block mb-2">They offer a unique opportunity for artists to showcase their work in a new and exciting way, and for collectors to own truly one-of-a-kind pieces that can hold value over time.</p>
                    <p className="block mb-2">Every time I add a new NFT to my collection, I feel a rush of excitement and satisfaction knowing that I own a piece of digital history. I am constantly inspired by the creativity and innovation that I see in the NFT space, and I am thrilled to be a part of this rapidly growing community.</p>
                </div>
            </Card>
        </Layout>
    )
}