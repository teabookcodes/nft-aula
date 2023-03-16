import Card from "../components/Card";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function DonatePage() {
  const [btcWalletAddress, setBtcWalletAddress] = useState('bc1qzvyvujy44z3y6qz5grlt4w7aq2vnkra2ycssh3');
  const [ltcWalletAddress, setLtcWalletAddress] = useState('ltc1qf9t08alecqfp9daw2ykth03pg6knrz9xltm36e');
  const [ethWalletAddress, setEthWalletAddress] = useState('0x48CA1C059E9394BeFb7Dc20E7064de73139F7BFd');
  const [dogeWalletAddress, setDogeWalletAddress] = useState('D9obVMZwqknKhGpHzcgwAFa8L5xdm1EcCt');

  function handleCopyBtcAddress() {
    navigator.clipboard.writeText(btcWalletAddress);
    alert("Address was copied to clipboard!");
  }
  function handleCopyLtcAddress() {
    navigator.clipboard.writeText(ltcWalletAddress);
    alert("Address was copied to clipboard!");
  }
  function handleCopyEthAddress() {
    navigator.clipboard.writeText(ethWalletAddress);
    alert("Address was copied to clipboard!");
  }
  function handleCopyDogeAddress() {
    navigator.clipboard.writeText(dogeWalletAddress);
    alert("Address was copied to clipboard!");
  }

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
            className="mx-auto md:mx-0 my-4 rounded-md shadow-xl shadow-gray-200 border-2 border-gray-200 dark:shadow-none"
            src="/BTC.png"
            alt="BTC QRcode"
            width="240"
            height="240"
          />

          <div className="flex gap-2 mx-auto md:mx-0 max-w-[240px]">
            <p className="mt-2 bg-gray-200 dark:bg-gray-600 px-1 py-1 rounded-md overflow-hidden">{btcWalletAddress}</p>
            <button className="mt-2 bg-gray-200 dark:bg-gray-600 px-1 py-1 rounded-md w-8 max-w-[240px]" onClick={handleCopyBtcAddress}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <p className="mx-auto md:ml-28 font-semibold text-aulaBlack">LTC</p>

          <Image
            className="mx-auto md:mx-0 my-4 rounded-md shadow-xl shadow-gray-200 border-2 border-gray-200 dark:shadow-none"
            src="/LTC.png"
            alt="LTC QRcode"
            width="240"
            height="240"
          />

          <div className="flex gap-2 mx-auto md:mx-0 max-w-[240px]">
            <p className="mt-2 bg-gray-200 dark:bg-gray-600 px-1 py-1 rounded-md overflow-hidden">{ltcWalletAddress}</p>
            <button className="mt-2 bg-gray-200 dark:bg-gray-600 px-1 py-1 rounded-md w-8 max-w-[240px]" onClick={handleCopyLtcAddress}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <p className="mx-auto mt:0 md:-mt-6 md:ml-6 font-semibold text-center text-aulaBlack">ETH<br />(and all ERC-20 tokens)</p>

          <Image
            className="mx-auto md:mx-0 my-4 rounded-md shadow-xl shadow-gray-200 border-2 border-gray-200 dark:shadow-none"
            src="/ETH.png"
            alt="ETH QRcode"
            width="240"
            height="240"
          />

          <div className="flex gap-2 mx-auto md:mx-0 max-w-[240px]">
            <p className="mt-2 bg-gray-200 dark:bg-gray-600 px-1 py-1 rounded-md overflow-hidden">{ethWalletAddress}</p>
            <button className="mt-2 bg-gray-200 dark:bg-gray-600 px-1 py-1 rounded-md w-8 max-w-[240px]" onClick={handleCopyEthAddress}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <p className="mx-auto md:ml-24 font-semibold text-aulaBlack">DOGE</p>

          <Image
            className="mx-auto md:mx-0 my-4 rounded-md shadow-xl shadow-gray-200 border-2 border-gray-200 dark:shadow-none"
            src="/DOGE.png"
            alt="DOGE QRcode"
            width="240"
            height="240"
          />

          <div className="flex gap-2 mx-auto md:mx-0 max-w-[240px]">
            <p className="mt-2 bg-gray-200 dark:bg-gray-600 px-1 py-1 rounded-md overflow-hidden">{dogeWalletAddress}</p>
            <button className="mt-2 bg-gray-200 dark:bg-gray-600 px-1 py-1 rounded-md w-8 max-w-[240px]" onClick={handleCopyDogeAddress}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* PayPal */}
      <h3 className="text-xl font-semibold text-center text-aulaBlack mt-8 md:mt-16 mb-0 md:mb-8">
        You can also support us through PayPal:
      </h3>
      <div className="flex flex-col mt-4">
        <Image
          className="mx-auto mb-4 rounded-md shadow-xl shadow-gray-200 border-2 border-gray-200 dark:shadow-none"
          src="/PayPal_QR.png"
          alt="PayPal QRcode"
          width="240"
          height="240"
        />

        <Link
          className="flex gap-2 items-center px-3 py-1 mx-auto rounded-md bg-gray-200 dark:bg-gray-600"
          href="https://www.paypal.com/paypalme/NFTaula"
          target="_blank"
        >
          paypal.com
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>

        </Link>
      </div>
      {/* </Card> */}
    </Layout>
  );
}
