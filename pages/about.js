import Card from "../components/Card";
import Layout from "../components/Layout";
import Link from "next/link";

export default function PrivacyPolicyPage() {
    return (
        <Layout>
            <Card>
                <div className="mx-auto">
                    <h1 className="text-xl text-center md:text-left font-semibold text-aulaBlack">
                        About
                    </h1>
                    <p className="mt-4">
                        Welcome to NFTaula.io, a platform for NFT creators and collectors! My
                        name is Ladislav Bagari, also known as NFTbagari on Twitter. I am a
                        passionate NFT collector and creator, and I created NFTaula.io to
                        provide a space where creators can showcase their work and collectors
                        can easily browse and discover new pieces to add to their collections.
                    </p>
                    <div className="my-8">
                        <img
                            className="rounded-md mx-auto mb-4"
                            src="https://pbs.twimg.com/profile_images/1622072686284312576/IahrC2Ed_400x400.jpg"
                            alt="NFTbagari"
                        />
                        <p className="text-center text-gray-500">
                            Ladislav Bagari, creator of NFTaula.io
                        </p>
                    </div>
                    <h2 className="text-xl text-center md:text-left font-semibold text-aulaBlack">
                        My Story
                    </h2>
                    <p className="mt-4">
                        As an NFT collector myself, I understand the thrill and excitement of
                        discovering new pieces to add to my collection. However, I also know
                        how difficult it can be for NFT creators to sell their work. That&apos;s
                        why I created NFTaula.io - to provide a platform where creators can
                        showcase their work and collectors can easily find and purchase unique
                        pieces.
                    </p>
                    <p className="mt-4">
                        I believe that NFTs have the power to revolutionize the way we think
                        about digital ownership and art. They offer a new and exciting way for
                        artists to showcase their work and for collectors to own one-of-a-kind
                        pieces that can hold value over time.
                    </p>
                    <p className="mt-4">
                        Every time I add a new NFT to my collection, I feel a rush of
                        excitement and satisfaction knowing that I own a piece of digital
                        history. I am constantly inspired by the creativity and innovation in
                        the NFT space, and I am thrilled to be a part of this rapidly growing
                        community.
                    </p>
                    <p className="mt-8">
                        Thank you for visiting NFTaula.io. Have a nice day!
                    </p>
                    <p className="mt-8">With respect,</p>
                    <p className="font-bold">Ladislav Bagari</p>
                </div>
            </Card>
        </Layout>
    );
}
