import Router, { useRouter } from "next/router";
import Link from "next/link";
import Card from "./Card";
import SiteLogo from "./SiteLogo";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useSession } from "@supabase/auth-helpers-react";

export default function NavigationCard() {
  const session = useSession();
  const supabase = useSupabaseClient();

  const router = useRouter();
  const { asPath: pathname } = router;

  const activeElementClasses =
    "text-sm md:text-md flex items-center md:gap-3 py-3 my-1 md:-mx-1 px-3 md:px-5 bg-aulaBlack text-white rounded-full shadow-md shadow-gray-300";
  const nonActiveElementClasses =
    "text-sm md:text-md flex items-center md:gap-3 py-2 my-2 px-2 hover:bg-aulaBlack hover:bg-opacity-10 rounded-full transition-all hover:scale-110 hover:shadow-md shadow-gray-300";

  async function logout() {
    await supabase.auth.signOut();
    Router.push("/");
  }

  return (
    <Card noPadding={true} marginBottom={true}>
      <div className="flex justify-center items-center md:block rounded-md shadow-md shadow-gray-500 md:shadow-none">
        <div className="px-4 py-2 flex gap-4 items-center justify-between md:block">
          <div className="ml-2 px-2 mt-2 mb-4 hidden md:block">
            <Link href="/">
              <SiteLogo size={"sm"} />
            </Link>
          </div>
          <Link
            href="/"
            className={
              pathname === "/" ? activeElementClasses : nonActiveElementClasses
            }
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
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span className="hidden md:block">Home</span>
          </Link>
          <Link
            href="/browse"
            className={
              pathname === "/browse"
                ? activeElementClasses
                : nonActiveElementClasses
            }
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <span className="hidden md:block">Browse</span>
          </Link>
          {session && (
            <div className="flex gap-4 items-center justify-between md:block">
              <Link
                href="/list-nft"
                className={
                  pathname === "/list-nft"
                    ? activeElementClasses
                    : nonActiveElementClasses
                }
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
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
                <span className="hidden md:block">List new NFT</span>
              </Link>
              <Link
                href="/saved"
                className={
                  pathname === "/saved"
                    ? activeElementClasses
                    : nonActiveElementClasses
                }
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
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
                <span className="hidden md:block">Saved NFTs</span>
              </Link>
              <Link
                href="/profile"
                className={
                  pathname === "/profile"
                    ? activeElementClasses
                    : nonActiveElementClasses
                }
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
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <span className="hidden md:block">My Profile</span>
              </Link>
              <button onClick={logout} className="w-full -my-2 md:mb-2">
                <span className={nonActiveElementClasses}>
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
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>
                  <span className="hidden md:block">Logout</span>
                </span>
              </button>
            </div>
          )}
          {!session && (
            <Link href="/login" className={nonActiveElementClasses}>
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
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
              <span className="hidden md:block">Login</span>
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}
