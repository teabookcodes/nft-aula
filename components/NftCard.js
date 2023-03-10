import Card from "./Card";
import ClickOutHandler from "react-clickout-handler";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Router, useRouter } from "next/router";
import Image from "next/image";

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
  const [isSaved, setIsSaved] = useState(false);
  const [canEdit, setCanEdit] = useState(false);
  const [canDelete, setCanDelete] = useState(false);

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
    alert("NFT successfully edited!");
  }

  async function toggleDelete() {
    if (canDelete) {
      const { error } = await supabase.from("nfts").delete().eq("id", id);
    }
    setDropdownOpen(false);
    alert("NFT successfully deleted!");
    window.location.reload();
  }

  return (
    <Card
      nftCard={pathname === "/saved" || pathname === "/profile" ? false : true}
      marginBottom={pathname === "/saved" ? true : false}
    >
      <div className="flex justify-between">
        <div>
          {/* <Link href="/nft-detail"> */}
          <h3 className="text-xl">
            <span className="font-semibold text-aulaBlack">{nftName}</span>
          </h3>
          {/* </Link> */}
          <h3 className="text-base mb-2">
            <span className="font-semibold">{collection}</span>
          </h3>
          {/* <p className="text-sm mb-2 text-gray-500">{description}</p> */}
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
        </div>
        {/* {session && author == session?.user?.id && ( */}
        {session && (
          <div className="relative">
            <button className="text-gray-400" onClick={openDropdown}>
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

      <div className="rounded-md overflow-hidden mt-2 mb-4 w-full h-60 flex items-center">
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
      <div className="flex items-center justify-start gap-3 ml-2 mb-2">
        {collectionWebsite !== "" && (
          <p className="block p-1 text-left rounded-full text-aulaBlack hover:text-indigo-600">
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
          <p className="block p-1 text-left rounded-full text-aulaBlack hover:text-indigo-600">
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
        <p className="block p-1 rounded-full text-aulaBlack hover:text-indigo-600">
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
        <p className="block p-1 text-left rounded-full text-aulaBlack hover:text-indigo-600">
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
  );
}
