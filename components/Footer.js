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
        <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center gap-2">
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
