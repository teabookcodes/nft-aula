import Card from "./Card";
import ClickOutHandler from "react-clickout-handler";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

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
        // supabase
        //   .from("saved_nfts")
        //   .select()
        //   .eq("nft_id", id)
        //   .eq("user_id", session.user.id)
        //   .then((result) => {
        //     if (result.data && result.data.length > 0) {
        //       setIsSaved(true);
        //     } else {
        //       setIsSaved(false);
        //     }
        //   });

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

  // function toggleSave() {
  //   if (isSaved) {
  //     supabase
  //       .from("saved_nfts")
  //       .delete()
  //       .eq("nft_id", id)
  //       .eq("user_id", session.user.id)
  //       .then((result) => {
  //         setIsSaved(false);
  //         setDropdownOpen(false);
  //       });
  //   }
  //   if (!isSaved) {
  //     supabase
  //       .from("saved_nfts")
  //       .insert({
  //         user_id: session.user.id,
  //         nft_id: id,
  //       })
  //       .then((result) => {
  //         setIsSaved(true);
  //         setDropdownOpen(false);
  //       });
  //   }
  // }

  function toggleEdit() {
    return;
  }

  // async function toggleDelete() {
  //   if (isSaved) {
  //     supabase
  //       .from("saved_nfts")
  //       .delete()
  //       .eq("nft_id", id)
  //       .eq("user_id", session.user.id)
  //       .then((result) => {
  //         setIsSaved(false);
  //         setDropdownOpen(false);
  //       });
  //   }
  //   if (canDelete) {
  //     const { error } = await supabase.from("nfts").delete().eq("id", id);
  //   }
  // }

  async function toggleDelete() {
    if (canDelete) {
      const { error } = await supabase.from("nfts").delete().eq("id", id);
    }
    setDropdownOpen(false);
  }

  // ALERT BN!VXJ HCBXJm!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // async function unsaveNft() {
  //   await supabase
  //     .from("saved_nfts")
  //     .delete("*")
  //     .filter("nft_id", "eq", id)
  //     .then((result) => {
  //       setIsSaved(false);
  //     });
  // }

  return (
    <Card nftCard={pathname === "/saved" || pathname === "/profile" ? false : true} marginBottom={pathname === "/saved" ? true : false}>
      <div className="flex justify-between">
        <div>
          {/* <Link href="/nft-detail"> */}
          <h3 className="text-xl">
            <span className="font-semibold text-aulaBlack">{nftName}</span>
          </h3>
          {/* </Link> */}
          <h3 className="text-base mb-2">
            <span className="font-semibold text-aulaGray">{collection}</span>
          </h3>
          <p className="text-sm mb-2 text-gray-500">{description}</p>
          <h3 className="text-base">
            Category:{" "}
            <span className="font-semibold text-aulaGray">{category}</span>
          </h3>
          <h3 className="text-base">
            Marketplace:{" "}
            <span className="font-semibold text-aulaGray">{marketplace}</span>
          </h3>
          <h3 className="text-base">
            Blockchain:{" "}
            <span className="font-semibold text-aulaGray">{blockchain}</span>
          </h3>
          <h3 className="text-lg my-2">
            Price:{" "}
            <span className="font-semibold text-aulaBlack">
              {price + " " + currency}
            </span>
          </h3>
        </div>
        {session && author == session?.user?.id && (
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
                  <div className="absolute -right-6 bg-white shadow-md shadow-gray-300 p-3 rounded-md border border-gray-100 w-52">
                    {/* <button onClick={toggleSave} className="w-full">
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
                    </button> */}
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
      <div className="rounded-md overflow-hidden my-2">
        {nftImage?.length > 0 && (
          <img
            className="w-full"
            src={nftImage}
            alt={nftName}
          />
        )}
        <div className="relative text-right">
          <div className="absolute rounded-lg text-white left-3 bottom-3">
            {collectionWebsite !== "" && (
              <p className="block w-16 mr-auto mb-2 px-3 text-left rounded-full text-white bg-aulaBlack">
                <a
                  href={collectionWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold"
                >
                  Web
                </a>
              </p>
            )}
            {collectionTwitter !== "" && (
              <p className="block w-20 mr-auto mb-2 px-3 text-left rounded-full text-white bg-aulaBlack">
                <a
                  href={collectionTwitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold"
                >
                  Twitter
                </a>
              </p>
            )}
            <p className="block w-28 mr-auto mb-2 px-3 text-left rounded-full text-white bg-aulaBlack">
              <a
                href={collectionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold"
              >
                Collection
              </a>
            </p>
            <p className="block w-auto mr-auto mb-2 px-3 text-left rounded-full text-white bg-aulaBlack">
              <a
                href={marketplaceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold"
              >
                Buy at {marketplace}
              </a>
            </p>
          </div>
        </div>
      </div>
      {pathname === "/saved" && (
        <p className="text-gray-400 text-sm">
          NFT was uploaded by: <span className="cursor-pointer">{author}</span>
        </p>
      )}
    </Card>
  );
}
