import { useRouter } from "next/router";
import Link from "next/link";

export default function Footer() {
    const router = useRouter();
    const { asPath: pathname } = router;

    return(
        <div className="flex my-4 p-4 items-center justify-between bg-aulaGray rounded-md shadow-md shadow-gray-300">
           <div>
        <Link href="/donate" className="block py-1 px-2 text-sm font-semibold text-white bg-aulaBlack rounded-md hover:bg-indigo-600">
           DONATE
            </Link>
           </div>
            <div className="flex">
            <Link href="/privacy-policy"
                className={
                pathname === "/privacy-policy" ? "ml-2 text-sm font-semibold text-aulaBlack" : "ml-2 text-sm font-semibold text-white"
                }>Privacy Policy</Link>
            <Link href="/terms-and-conditions"
                className={
                pathname === "/terms-and-conditions" ? "ml-2 text-sm font-semibold text-aulaBlack" : "ml-2 text-sm font-semibold text-white"
                }>Terms and Conditions</Link>
                           <span className="ml-8 text-sm text-white">&copy; 2023 NFTaula.io</span>
            </div>
      </div>
    );
}