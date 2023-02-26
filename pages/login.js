import Layout from "../components/Layout";
import Card from "../components/Card";
import Link from "next/link";
import Router from "next/router";
import { useSupabaseClient, useSession } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const [showOverlay, setShowOverlay] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");

  async function signInWithMagicLink() {
    let { data, error } = await supabase.auth.signInWithOtp({
      email: loginEmail,
    })
    alert("Magic Link sent to " + loginEmail + " !");
    setShowOverlay(false);
  }

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
  }

  useEffect(() => {
    if (session) {
      Router.push("/");
    }
  }, [session]);

  return (
    <Layout hideNavigation={true}>
      <div className="h-screen flex items-center">
        <div className="max-w-xs mx-auto grow -mt-36">
          {/* <div className="flex justify-center mt-8 md:mt-16 mb-4">
            <SiteLogo />
          </div> */}
          <button
            onClick={() => setShowOverlay(!showOverlay)}
            className="flex w-full gap-4 my-2 py-4 px-8 rounded-md items-center border-2 bg-white shadow-xl shadow-gray-200 border-aulaBg hover:bg-aulaBlack hover:text-white stroke-aulaGray hover:stroke-white  transition-all hover:scale-110"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 8C3 7.06812 3 6.60218 3.15224 6.23463C3.35523 5.74458 3.74458 5.35523 4.23463 5.15224C4.60218 5 5.06812 5 6 5V5H18V5C18.9319 5 19.3978 5 19.7654 5.15224C20.2554 5.35523 20.6448 5.74458 20.8478 6.23463C21 6.60218 21 7.06812 21 8V16C21 16.9319 21 17.3978 20.8478 17.7654C20.6448 18.2554 20.2554 18.6448 19.7654 18.8478C19.3978 19 18.9319 19 18 19V19H6V19C5.06812 19 4.60218 19 4.23463 18.8478C3.74458 18.6448 3.35523 18.2554 3.15224 17.7654C3 17.3978 3 16.9319 3 16V8Z" stroke="inherit" strokeWidth="2" strokeLinejoin="round"></path> <path d="M4 6L10.683 11.8476C11.437 12.5074 12.563 12.5074 13.317 11.8476L20 6" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            Sign in with Magic Link</button>

          {showOverlay && (
            <div className="p-4 bg-white rounded-md shadow-xl shadow-gray-200 border border-1 border-gray-100">
              <label className="block text-center text-gray-700 mb-4">Your email:</label>
              <input className="w-full rounded-lg px-4 py-2 bg-gray-50 text-gray-700 border-2 border-aulaGray focus:outline-none focus:border-indigo-500"
                type="text"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)} />
              <button
                onClick={signInWithMagicLink}
                className="flex mx-auto gap-4 mt-4 py-2 px-4 rounded-md items-center justify-center text-white bg-aulaBlack transition-all hover:scale-110"
              >Send Magic Link</button>
            </div>

          )}

          {!showOverlay && (
            <button
              onClick={signInWithGoogle}
              className="flex w-full gap-4 my-2 py-4 px-8 rounded-md items-center border-2 bg-white shadow-xl shadow-gray-200 border-aulaBg hover:bg-aulaBlack hover:text-white fill-aulaGray hover:fill-white transition-all hover:scale-110"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="inherit" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19.76 10.77L19.67 10.42H12.23V13.58H16.68C16.4317 14.5443 15.8672 15.3974 15.0767 16.0029C14.2863 16.6084 13.3156 16.9313 12.32 16.92C11.0208 16.9093 9.77254 16.4135 8.81999 15.53C8.35174 15.0685 7.97912 14.5191 7.72344 13.9134C7.46777 13.3077 7.33407 12.6575 7.33 12C7.34511 10.6795 7.86792 9.41544 8.79 8.47002C9.7291 7.58038 10.9764 7.08932 12.27 7.10002C13.3779 7.10855 14.4446 7.52101 15.27 8.26002L17.47 6.00002C16.02 4.70638 14.1432 3.9941 12.2 4.00002C11.131 3.99367 10.0713 4.19793 9.08127 4.60115C8.09125 5.00436 7.19034 5.59863 6.43 6.35002C4.98369 7.8523 4.16827 9.85182 4.15152 11.9371C4.13478 14.0224 4.918 16.0347 6.34 17.56C7.12784 18.3449 8.06422 18.965 9.09441 19.3839C10.1246 19.8029 11.2279 20.0123 12.34 20C13.3484 20.0075 14.3479 19.8102 15.2779 19.42C16.2078 19.0298 17.0488 18.4549 17.75 17.73C19.1259 16.2171 19.8702 14.2347 19.83 12.19C19.8408 11.7156 19.8174 11.2411 19.76 10.77Z" fill="inherit"></path> </g></svg>
              Sign in with Google</button>
          )}

          <p className="mt-4 text-sm text-aulaGray text-center">By registering or signing in, you accept our <Link className="text-aulaBlack" href="/privacy-policy">GDPR (for EU) and Privacy Policy.</Link></p>
        </div>
      </div>
    </Layout>
  );

  // return (
  //   <Layout hideNavigation={true}>
  //     <div className="h-screen flex items-center">
  //       <div className="max-w-xs mx-auto grow -mt-24">
  //         {/* <h1 className="text-5xl mb-4 text-gray-300 text-center">NFTaula</h1> */}
  //         <div className="flex justify-center mb-4">
  //           <SiteLogo />
  //         </div>
  //         <Card noPadding={true}>
  //           <div className="rounded-md overflow-hidden">
  //             <button
  //               onClick={loginWithGoogle}
  //               className="flex w-full gap-4 items-center justify-center p-4 border-b border-b-gray-100 hover:bg-aulaBlack hover:text-white hover:border-b-aulaBlack transition-all hover:scale-110"
  //             >
  //               <svg
  //                 className="h-8 fill-current"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 viewBox="0 0 488 512"
  //               >
  //                 <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
  //               </svg>
  //               Login with Google
  //             </button>
  //             <Link
  //               href="/"
  //               className="flex gap-4 items-center justify-center p-4 border-b border-b-gray-100 hover:bg-aulaBlack hover:text-white hover:border-b-aulaBlack transition-all hover:scale-110"
  //             >
  //               <svg
  //                 className="h-8 fill-current"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 viewBox="0 0 512 512"
  //               >
  //                 <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
  //               </svg>
  //               Login with Twitter
  //             </Link>
  //             <Link
  //               href="/"
  //               className="flex gap-4 items-center justify-center p-4 border-b border-b-gray-100 hover:bg-aulaBlack hover:text-white hover:border-b-aulaBlack transition-all hover:scale-110"
  //             >
  //               <svg
  //                 className="h-8 fill-current"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 viewBox="0 0 496 512"
  //               >
  //                 <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
  //               </svg>
  //               Login with GitHub
  //             </Link>
  //           </div>
  //         </Card>
  //       </div>
  //     </div>
  //   </Layout>
  // );
}
