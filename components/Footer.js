import Link from "next/link";

export default function Footer() {


    return(
        <div className="block text-center md:flex mt-8 md:mt-2 -mb-8 md:mb-4 -mx-4 md:mx-0 py-4 px-4 md:px-0 items-center justify-between bg-aulaGray md:bg-transparent">
           <div>
        <Link href="/donate" className="block mx-auto mt-2 mb-4 md:mt-0 md:mb-0 w-20 md:w-full py-1 px-2 text-sm font-semibold text-white bg-aulaBlack rounded-md hover:bg-indigo-600">
           DONATE
            </Link>
           </div>
            <div className="block md:flex md:gap-2">
            <Link href="/privacy-policy"
                className="text-sm text-aulaBlack"
                >Privacy Policy</Link>
                <br className="block md:hidden" />
            <Link href="/terms-and-conditions"
                className="text-sm text-aulaBlack"
                >
                    Terms and Conditions</Link>
                    <p className="mt-4 mb-2 md:mt-0 md:mb-0 text-sm text-aulaBlack">© 2023 NFTaula.io</p>
                           
            </div>
      </div>
    );
}