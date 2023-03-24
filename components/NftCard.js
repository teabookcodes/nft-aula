import Card from "./Card";
import EditNftForm from "./EditNftForm";
import ClickOutHandler from "react-clickout-handler";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Router, useRouter } from "next/router";
import Image from "next/image";
import Modal from "./Modal";

export default function NftCard({
  id,
  author,
  nftName,
  collection,
  category,
  description,
  marketplace,
  blockchain,
  currency,
  price,
  marketplaceLink,
  collectionLink,
  collectionTwitter,
  collectionWebsite,
  nftImage,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showNftDetailModal, setShowNftDetailModal] = useState(false);
  const [showEditFormModal, setShowEditFormModal] = useState(false);

  const [isSaved, setIsSaved] = useState(false);
  const [canEdit, setCanEdit] = useState(false);
  const [canDelete, setCanDelete] = useState(false);

  const [formNftName, setFormNftName] = useState("");
  const [formCollection, setFormCollection] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formCategory, setFormCategory] = useState("");
  const [formMarketplace, setFormMarketplace] = useState("");
  const [formBlockchain, setFormBlockchain] = useState("");
  const [formCurrency, setFormCurrency] = useState("");
  const [formPrice, setFormPrice] = useState("");
  const [formMarketplaceLink, setFormMarketplaceLink] = useState("");
  const [formCollectionTwitter, setFormCollectionTwitter] = useState("");
  const [formCollectionLink, setFormCollectionLink] = useState("");
  const [formCollectionWebsite, setFormCollectionWebsite] = useState("");
  const [upload, setUpload] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const supabase = useSupabaseClient();
  const session = useSession();

  const router = useRouter();
  const { asPath: pathname } = router;

  useEffect(() => {
    if (session?.user?.id) {
      const fetchData = () => {
        supabase
          .from("saved_nfts")
          .select()
          .eq("nft_id", id)
          .eq("user_id", session.user.id)
          .then((result) => {
            if (result.data && result.data.length > 0) {
              setIsSaved(true);
            } else {
              setIsSaved(false);
            }
          });

        supabase
          .from("nfts")
          .select()
          .eq("id", id)
          .eq("author", session.user.id)
          .then((result) => {
            if (result.data && result.data.length > 0) {
              setCanEdit(true);
              setCanDelete(true);
              setFormNftName(nftName)
              setFormCollection(collection)
              setFormDescription(description)
              setFormCategory(category)
              setFormMarketplace(marketplace)
              setFormBlockchain(blockchain)
              setFormCurrency(currency)
              setFormPrice(price)
              setFormMarketplaceLink(marketplaceLink)
              setFormCollectionLink(collectionLink)
              setFormCollectionTwitter(collectionTwitter)
              setFormCollectionWebsite(collectionWebsite)
              setUpload(nftImage)
            } else {
              setCanEdit(false);
              setCanDelete(false);
            }
          });
      };

      fetchData();
    }
  }, [supabase, session?.user?.id, id]);

  function openDropdown(e) {
    e.stopPropagation();
    setDropdownOpen(true);
  }

  function handleClickOutsideDropdown(e) {
    e.stopPropagation();
    setDropdownOpen(false);
  }

  function toggleSave() {
    if (isSaved) {
      supabase
        .from("saved_nfts")
        .delete()
        .eq("nft_id", id)
        .eq("user_id", session.user.id)
        .then((result) => {
          setIsSaved(false);
          setDropdownOpen(false);
          alert("NFT unsaved successfully!");
          window.location.reload();
        });
    }
    if (!isSaved) {
      supabase
        .from("saved_nfts")
        .insert({
          user_id: session.user.id,
          nft_id: id,
        })
        .then((result) => {
          setIsSaved(true);
          setDropdownOpen(false);
          alert("NFT saved successfully!");
        });
    }
  }

  function toggleEdit() {
    setShowEditFormModal(!showEditFormModal)
  }

  async function toggleDelete() {
    if (canDelete) {
      const { error } = await supabase.from("nfts").delete().eq("id", id);
    }
    setDropdownOpen(false);
    alert("NFT successfully deleted!");
    window.location.reload();
  }

  function openNftDetail() {
    setShowNftDetailModal(!showNftDetailModal)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform upload with nftName, collection, categoryTags, marketplace, blockchain, currency, price, marketplaceLink, collectionTwitter, collectionWebsite, and nftImage here
  };

  async function addNftImage(e) {
    const files = e.target.files;
    if (files.length > 0) {
      setIsUploading(true);
      for (const file of files) {
        const newName = Date.now() + file.name;
        const result = await supabase.storage
          .from("nfts")
          .upload(newName, file);
        if (result.data) {
          const url =
            process.env.NEXT_PUBLIC_SUPABASE_URL +
            "/storage/v1/object/public/nfts/" +
            result.data.path;
          setUpload(url);
        }
      }
      setIsUploading(false);
    }
  }

  function submitForm() {
    supabase
      .from("nfts")
      .update({
        author: session.user.id,
        nftName: formNftName,
        collection: formCollection,
        description: formDescription,
        category: formCategory,
        marketplace: formMarketplace,
        blockchain: formBlockchain,
        currency: formCurrency,
        price: formPrice,
        marketplaceLink: formMarketplaceLink,
        collectionTwitter: formCollectionTwitter,
        collectionLink: formCollectionLink,
        collectionWebsite: formCollectionWebsite,
        nftImage: upload,
      })
      .eq("id", id)
      .eq("author", session.user.id)
      .then((response) => {
        if (!response.error) {
          setFormNftName("");
          setFormCollection("");
          setFormDescription("");
          setFormCategory("");
          setFormMarketplace("");
          setFormBlockchain("");
          setFormCurrency("");
          setFormPrice("");
          setFormMarketplaceLink("");
          setFormCollectionTwitter("");
          setFormCollectionLink("");
          setFormCollectionWebsite("");
          setUpload("");
          alert("NFT succesfully updated!");
          window.location.reload();
        } else {
          alert(
            "NFT could not be updated due to an error. You must fill in all fields correctly!"
          );
        }
      });
  }

  return (
    <div>
      <Modal showModal={showNftDetailModal} setShowModal={setShowNftDetailModal}>
        <div className="flex flex-col">
          <div>
            <h3 className="text-xl font-semibold text-aulaBlack">
              {nftName}
            </h3>
            <h3 className="text-base mb-2">
              <span className="font-semibold">{collection}</span>
            </h3>
            <p className="text-sm mb-2 text-gray-500">{description}</p>
            <h3 className="text-base">
              Category: <span className="font-semibold">{category}</span>
            </h3>
            <h3 className="text-base">
              Marketplace: <span className="font-semibold">{marketplace}</span>
            </h3>
            <h3 className="text-base">
              Blockchain: <span className="font-semibold">{blockchain}</span>
            </h3>
            <h3 className="text-lg my-2">
              Price:{" "}
              <span className="font-semibold text-aulaBlack">
                {price + " " + currency}
              </span>
            </h3>
            <img src={nftImage} alt={nftName} />
          </div>
        </div>
      </Modal>
      <Modal showModal={showEditFormModal} setShowModal={setShowEditFormModal}>
        <form onSubmit={handleSubmit} className="text-gray-700">
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-50 mb-2">Name of the NFT:</label>
            <input
              className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-indigo-500"
              type="text"
              value={formNftName}
              onChange={(e) => setFormNftName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-50 mb-2">Collection name:</label>
            <input
              className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-indigo-500"
              type="text"
              value={formCollection}
              onChange={(e) => setFormCollection(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-50 mb-2">Description:</label>
            <textarea
              className="w-full rounded-md px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-indigo-500"
              type="text"
              value={formDescription}
              onChange={(e) => setFormDescription(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="flex gap-2 justify-center w-full rounded-full p-3 bg-indigo-500 text-white">
              <input type="file" className="hidden" onChange={addNftImage} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              Click to upload NFT Image
            </label>
          </div>
          {isUploading && <div className="mb-6">Uploading... please wait</div>}
          {upload.length > 0 && (
            <div className="flex justify-center mb-6">
              <div>
                <img src={upload} alt="" className="w-full h-auto rounded-md" />
              </div>
            </div>
          )}
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-50 mb-2">Category:</label>
            <select
              className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-indigo-500"
              value={formCategory}
              onChange={(e) => setFormCategory(e.target.value)}
            >
              <option value="">Please select a category</option>
              <option value="Art">Art</option>
              <option value="Celebrities">Celebrities</option>
              <option value="Collectibles">Collectibles</option>
              <option value="Domain Names">Domain Names</option>
              <option value="Gaming">Gaming</option>
              <option value="Memberships">Memberships</option>
              <option value="Memes">Memes</option>
              <option value="Music">Music</option>
              <option value="PFPs">PFPs (Profile Pictures)</option>
              <option value="Photography">Photography</option>
              <option value="Sports">Sports</option>
              <option value="Trading Cards">Trading Cards</option>
              <option value="Utility">Utility</option>
              <option value="Video">Video</option>
              <option value="Virtual Worlds">Virtual Worlds</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-50 mb-2">Marketplace:</label>
            <select
              className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-indigo-500"
              value={formMarketplace}
              onChange={(e) => setFormMarketplace(e.target.value)}
            >
              <option value="">Please select a marketplace</option>
              <option value="Blur">Blur</option>
              <option value="Foundation">Foundation</option>
              <option value="KnownOrigin">KnownOrigin</option>
              <option value="MagicEden">MagicEden</option>
              <option value="Mintable">Mintable</option>
              <option value="Nifty Gateway">Nifty Gateway</option>
              <option value="Objkt.com">Objkt.com</option>
              <option value="OnePlanet NFT">OnePlanet NFT</option>
              <option value="OpenSea">OpenSea</option>
              <option value="Rarible">Rarible</option>
              <option value="SuperRare">SuperRare</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-50 mb-2">Blockchain:</label>
            <select
              className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-indigo-500"
              value={formBlockchain}
              onChange={(e) => setFormBlockchain(e.target.value)}
            >
              <option value="">Please select a blockchain</option>
              <option value="BNB">Binance Chain (BNB)</option>
              <option value="Ethereum">Ethereum</option>
              <option value="Flow">Flow</option>
              <option value="Polygon">Polygon</option>
              <option value="Solana">Solana</option>
              <option value="Tezos">Tezos</option>
              <option value="WAX">Worldwide Asset Exchange (WAX)</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-50 mb-2">Currency:</label>
            <select
              className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-indigo-500"
              value={formCurrency}
              onChange={(e) => setFormCurrency(e.target.value)}
            >
              <option value="">Please select a currency</option>
              <option value="BNB">Binance Coin (BNB)</option>
              <option value="DAI">DAI</option>
              <option value="ETH">Ether (ETH)</option>
              <option value="FLOW">FLOW</option>
              <option value="MATIC">MATIC</option>
              <option value="SOL">Solana (SOL)</option>
              <option value="XTZ">Tezos (XTZ)</option>
              <option value="UNI">UNI</option>
              <option value="USDC">USDC</option>
              <option value="WAX">WAX</option>
              <option value="WETH">Wrapped Ether (WETH)</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-50 mb-2">Price:</label>
            <input
              className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-indigo-500"
              type="number"
              value={formPrice}
              onChange={(e) => setFormPrice(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-50 mb-2">Link to your NFT on the marketplace:</label>
            <input
              className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="https://marketplace.io/yournft"
              value={formMarketplaceLink}
              onChange={(e) => setFormMarketplaceLink(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-50 mb-2">
              Link to collection on the marketplace:
            </label>
            <input
              className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="https://marketplace.io/yourcollection"
              value={formCollectionLink}
              onChange={(e) => setFormCollectionLink(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-50 mb-2">Twitter:</label>
            <input
              className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="https://twitter.com/yourcollection"
              value={formCollectionTwitter}
              onChange={(e) => setFormCollectionTwitter(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-50 mb-2">Website:</label>
            <input
              className="w-full rounded-full px-4 py-2 bg-gray-100 text-gray-700 dark:text-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="https://yourcollectionwebsite.com"
              value={formCollectionWebsite}
              onChange={(e) => setFormCollectionWebsite(e.target.value)}
            />
          </div>
          <div className="flex w-full justify-center md:justify-start">
            <button
              type="submit"
              className="bg-indigo-500 text-white rounded-full py-2 px-4 hover:bg-indigo-600"
              onClick={submitForm}
            >
              Save & submit
            </button>
          </div>
        </form>
      </Modal>
      <Card
        nftCard={pathname === "/saved" || pathname === "/profile" ? false : true}
        marginBottom={pathname === "/saved" ? true : false}
        noPadding={true}
      >
        <div className="flex justify-between">
          <div>
            {/* <Link href="/nft-detail"> */}
            {/* <h3 className="text-xl">
              <Link href="/" className="font-semibold text-aulaBlack">{nftName.length > 12 ? nftName.slice(0, 12) + "..." : nftName}</Link>
            </h3> */}
            {/* </Link> */}
            {/* <h3 className="text-base mb-2">
              <span className="font-semibold">{collection}</span>
            </h3> */}
            {/* <p className="text-sm mb-2 text-gray-500">{description}</p> */}
            {/* <h3 className="text-base">
              Category: <span className="font-semibold">{category}</span>
            </h3> */}
            {/* <h3 className="text-base">
              Marketplace: <span className="font-semibold">{marketplace}</span>
            </h3> */}
            {/* <h3 className="text-base">
              Blockchain: <span className="font-semibold">{blockchain}</span>
            </h3> */}
            {/* <h3 className="text-lg my-2">
              Price:{" "}
              <span className="font-semibold text-aulaBlack">
                {price + " " + currency}
              </span>
            </h3> */}
          </div>
          {/* {session && author == session?.user?.id && ( */}
          {session && (
            <div className="relative flex p-1 rounded-full bg-aulaBlack top-2 right-2">
              <button className="text-white" onClick={openDropdown}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="bg-red w-7 h-5 absolute top-0 -right-1"></div>
              )}
              <ClickOutHandler onClickOut={handleClickOutsideDropdown}>
                <div className="relative">
                  {dropdownOpen && (
                    <div className="absolute -right-6 bg-white dark:bg-gray-800 shadow-md shadow-gray-300 dark:shadow-none p-3 rounded-md border border-gray-100 dark:border-gray-900 w-52">
                      <button onClick={toggleSave} className="w-full">
                        <span className="flex gap-3 py-2 hover:bg-aulaBlack hover:text-white px-4 -mx-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300">
                          {isSaved && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5"
                              />
                            </svg>
                          )}

                          {!isSaved && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                              />
                            </svg>
                          )}

                          {isSaved ? "Unsave" : "Save NFT"}
                        </span>
                      </button>
                      {/* <a
                            href=""
                            className="flex gap-3 py-2 my-2 hover:bg-aulaBlack hover:text-white -mx-4 px-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                              />
                            </svg>
                            Turn notifications
                          </a> */}
                      {canEdit && (
                        <button onClick={toggleEdit} className="w-full">
                          <span className="flex gap-3 py-2 hover:bg-aulaBlack hover:text-white px-4 -mx-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                              />
                            </svg>
                            Edit NFT
                          </span>
                        </button>
                      )}
                      {canDelete && (
                        <button onClick={toggleDelete} className="w-full">
                          <span className="flex gap-3 py-2 hover:bg-aulaBlack hover:text-white px-4 -mx-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                            Delete NFT
                          </span>
                        </button>
                      )}

                      {/* <a
                            href=""
                            className="flex gap-3 py-2 my-2 hover:bg-aulaBlack hover:text-white -mx-4 px-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                              />
                            </svg>
                            Report
                          </a> */}
                    </div>
                  )}
                </div>
              </ClickOutHandler>
            </div>
          )}
        </div>

        <div onClick={openNftDetail} className="-my-4 rounded-md overflow-hidden w-full h-60 flex items-center cursor-pointer">
          <img src={nftImage} alt={nftName} className="w-full" />
        </div>

        {/* {nftImage?.length > 0 && (
          <Image
            className=""
            src={nftImage}
            alt={nftName}
            width="360"
            height="360"
          />
        )} */}
        <div className="relative left-2 bottom-2 flex items-center justify-start gap-3">
          {collectionWebsite !== "" && (
            <p className="block p-1 text-left rounded-full bg-white text-aulaBlack hover:text-indigo-600">
              <a
                href={collectionWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold"
                title="Website"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </a>
            </p>
          )}
          {collectionTwitter !== "" && (
            <p className="block p-1 text-left rounded-full bg-white text-aulaBlack hover:text-indigo-600">
              <a
                href={collectionTwitter}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold"
                title="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M11.919 24.94c-2.548 0-4.921-.747-6.919-2.032a9.049 9.049 0 0 0 6.681-1.867 4.512 4.512 0 0 1-4.215-3.137c.276.054.559.082.848.082.412 0 .812-.056 1.193-.156a4.519 4.519 0 0 1-3.622-4.425v-.059a4.478 4.478 0 0 0 2.042.564 4.507 4.507 0 0 1-2.008-3.758c0-.824.225-1.602.612-2.268a12.811 12.811 0 0 0 9.303 4.715 4.517 4.517 0 0 1 7.692-4.115 9.107 9.107 0 0 0 2.866-1.094 4.542 4.542 0 0 1-1.983 2.498 9.08 9.08 0 0 0 2.592-.71 9.283 9.283 0 0 1-2.252 2.337c.008.193.014.388.014.583-.001 5.962-4.542 12.843-12.844 12.842"></path>
                  </g>
                </svg>
              </a>
            </p>
          )}
          <p className="block p-1 rounded-full bg-white text-aulaBlack hover:text-indigo-600">
            <a
              href={collectionLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold"
              title="Open collection on Marketplace"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                />
              </svg>
            </a>
          </p>
          <p className="block p-1 text-left rounded-full bg-white text-aulaBlack hover:text-indigo-600">
            <a
              href={marketplaceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold"
              title="Buy NFT on Marketplace"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                />
              </svg>
            </a>
          </p>
        </div>
        {pathname === "/saved" && (
          <p className="text-gray-400 text-sm">
            NFT was uploaded by: <span className="cursor-pointer">{author}</span>
          </p>
        )}
      </Card>
    </div >
  );
}
