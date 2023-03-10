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

      <div className="flex flex-col md:flex-row mt-8 mb-4 md:mb-8 md:mt-0 items-center gap-2">
        <Link className="block w-28 py-2 px-3 text-sm font-semibold text-white bg-aulaBlack rounded-md hover:bg-indigo-600" href="https://app.ens.domains/name/nftaula.eth/details" target="_blank">
          NFTaula.eth
        </Link>
        <Link className="block w-32 py-2 px-3 text-sm font-semibold text-white bg-aulaBlack rounded-md hover:bg-indigo-600" href="https://etherscan.io/tokens" target="_blank">
          ERC-20 tokens
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col mt-8">
          <p className="mx-auto md:ml-28 font-semibold text-aulaBlack">BTC</p>
          <Image
            className="mx-auto md:mx-0 my-4"
            src="/BTC.png"
            alt="BTC QRcode"
            width="240"
            height="240"
          />
        </div>
        <div className="flex flex-col mt-8">
          <p className="mx-auto md:ml-28 font-semibold text-aulaBlack">LTC</p>
          <Image
            className="mx-auto md:mx-0 my-4"
            src="/LTC.png"
            alt="LTC QRcode"
            width="240"
            height="240"
          />
        </div>
        <div className="flex flex-col mt-8">
          <p className="mx-auto mt:0 md:-mt-6 md:ml-6 font-semibold text-center text-aulaBlack">ETH<br />(and all ERC-20 tokens)</p>
          <Image
            className="mx-auto md:mx-0 my-4"
            src="/ETH.png"
            alt="ETH QRcode"
            width="240"
            height="240"
          />
        </div>
        <div className="flex flex-col mt-8">
          <p className="mx-auto md:ml-24 font-semibold text-aulaBlack">DOGE</p>
          <Image
            className="mx-auto md:mx-0 my-4"
            src="/DOGE.png"
            alt="DOGE QRcode"
            width="240"
            height="240"
          />
        </div>
      </div>
      {/* PayPal */}
      <h3 className="text-xl font-semibold text-center md:text-left text-aulaBlack mt-8 mb-0 md:mb-8">
        You can also support us through PayPal:
      </h3>
      <div className="flex flex-col mt-8">
        <Link
          className="mx-auto md:ml-28 font-semibold text-aulaBlack"
          href="https://www.paypal.com/paypalme/NFTaula"
          target="_blank"
        >
          PayPal
        </Link>
        <Image
          className="mx-auto md:mx-0"
          src="/PayPal_QR.png"
          alt="PayPal QRcode"
          width="280"
          height="280"
        />
      </div>
      {/* </Card> */}
    </Layout>
  );
}
