import Card from "../components/Card";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";

export default function DonatePage() {
  return (
    <Layout>
      {/* <Card> */}
      <h1 className="text-xl font-semibold text-aulaBlack text-center md:text-left">
        Donate
      </h1>
      <p className="block mt-4 mb-4 text-center md:text-left">
        At NFTaula.io we believe in supporting and empowering the NFT community.
        Our goal is to provide a platform for NFT creators to showcase their
        work for free and for collectors to discover new and exciting NFTs.
      </p>
      <p className="text-center md:text-left">
        If you like the NFTaula site and would like us supported, you can now
        contribute in different cryptocurrencies. Your contributions will help
        us maintain and improve the site and ensure that the NFT community
        continues to thrive.
      </p>

      <p className="block mt-4 mb-2 font-semibold text-center md:text-left">
        Thank you for your support!{" "}
      </p>

      <Link
        className="block font-semibold text-aulaBlack text-center md:text-left"
        href="https://twitter.com/NFTbagari"
        target="_blank"
      >
        Ladislav Bagári
      </Link>

      <h3 className="text-xl font-semibold text-center md:text-left text-aulaBlack mt-16 mb-0 md:mb-8">
        Support us by sending crypto to any of this adresses:
      </h3>
      {/* <p className="mt-4">
          <span className="font-semibold mr-2">BTC</span>
          bc1qzvyvujy44z3y6qz5grlt4w7aq2vnkra2ycssh3
        </p>

        <p className="mt-4">
          <span className="font-semibold mr-2">LTC</span>
          ltc1qf9t08alecqfp9daw2ykth03pg6knrz9xltm36e
        </p>

        <p className="mt-4">
          <span className="font-semibold mr-2">
            ETH (and all ERC-20 tokens)
          </span>
          0x48CA1C059E9394BeFb7Dc20E7064de73139F7BFd
        </p>

        <p className="mt-4">
          <span className="font-semibold mr-2">DOGE</span>
          D9obVMZwqknKhGpHzcgwAFa8L5xdm1EcCt
        </p> */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col mt-8">
          <p className="mx-auto md:ml-32 font-semibold text-aulaBlack">BTC</p>
          <Image
            className="mx-auto md:mx-0"
            src="/BTC.png"
            alt="BTC QRcode"
            width="320"
            height="320"
          />
        </div>
        <div className="flex flex-col mt-8">
          <p className="mx-auto md:ml-32 font-semibold text-aulaBlack">LTC</p>
          <Image
            className="mx-auto md:mx-0"
            src="/LTC.png"
            alt="LTC QRcode"
            width="320"
            height="320"
          />
        </div>
        <div className="flex flex-col mt-8">
          <p className="mx-auto md:ml-32 font-semibold text-aulaBlack">ETH</p>
          <Image
            className="mx-auto md:mx-0"
            src="/ETH.png"
            alt="ETH QRcode"
            width="320"
            height="320"
          />
        </div>
        <div className="flex flex-col mt-8">
          <p className="mx-auto md:ml-32 font-semibold text-aulaBlack">DOGE</p>
          <Image
            className="mx-auto md:mx-0"
            src="/DOGE.png"
            alt="DOGE QRcode"
            width="320"
            height="320"
          />
        </div>
      </div>
      {/* PayPal */}
      <h3 className="text-xl font-semibold text-center md:text-left text-aulaBlack mt-8 mb-0 md:mb-8">
        You can also support us through PayPal:
      </h3>
      <div className="flex flex-col mt-8">
        <Link
          className="mx-auto md:ml-32 font-semibold text-aulaBlack"
          href="https://www.paypal.com/paypalme/NFTaula"
          target="_blank"
        >
          PayPal
        </Link>
        <Image
          className="mx-auto md:mx-0"
          src="/PayPal_QR.png"
          alt="PayPal QRcode"
          width="320"
          height="320"
        />
      </div>
      {/* </Card> */}
    </Layout>
  );
}
