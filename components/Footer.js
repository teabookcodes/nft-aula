import Link from "next/link";

export default function Footer() {
  return (
    <div className="block w-full bg-aulaGray px-4 md:px-12 py-8 md:py-4 mt-0 md:mt-16 mb-16 md:mb-0">
      <div className="container mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between items-center">
        <Link href="/donate">
          <div className="block py-2 px-4 text-sm font-semibold text-white bg-aulaBlack rounded-md hover:bg-indigo-600">
            DONATE
          </div>
        </Link>
        <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center gap-4">
          <Link href="https://twitter.com/NFTaula" target={"_blank"}>
            <svg className="w-8 h-8 hover:fill-aulaBlack hover:stroke-aulaBlack" fill="#FFFFFF" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.919 24.94c-2.548 0-4.921-.747-6.919-2.032a9.049 9.049 0 0 0 6.681-1.867 4.512 4.512 0 0 1-4.215-3.137c.276.054.559.082.848.082.412 0 .812-.056 1.193-.156a4.519 4.519 0 0 1-3.622-4.425v-.059a4.478 4.478 0 0 0 2.042.564 4.507 4.507 0 0 1-2.008-3.758c0-.824.225-1.602.612-2.268a12.811 12.811 0 0 0 9.303 4.715 4.517 4.517 0 0 1 7.692-4.115 9.107 9.107 0 0 0 2.866-1.094 4.542 4.542 0 0 1-1.983 2.498 9.08 9.08 0 0 0 2.592-.71 9.283 9.283 0 0 1-2.252 2.337c.008.193.014.388.014.583-.001 5.962-4.542 12.843-12.844 12.842"></path></g></svg>
          </Link>
          <Link href="/contact" className="text-sm text-white underline hover:text-aulaBlack">
            Contact
          </Link>
          <Link href="/about" className="text-sm text-white underline hover:text-aulaBlack">
            About
          </Link>
          <Link href="/privacy-policy" className="text-sm text-white underline hover:text-aulaBlack">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="text-sm text-white underline hover:text-aulaBlack">
            Terms and Conditions
          </Link>
        </div>
        <p className="mt-4 md:mt-0 text-sm text-white">© 2023 NFTaula.io</p>
      </div>
    </div>
  );
}
