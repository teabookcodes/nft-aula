// import Link from "next/link";
// import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Card from "../components/Card";
import NftCard from "../components/NftCard";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";

export default function ProfilePage() {
  //   const router = useRouter();
  //   const { asPath: pathname } = router;

  // const isNfts = true;
  const supabase = useSupabaseClient();
  const session = useSession();

  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [upload, setUpload] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    if (!session) {
      return;
    } else {
      setUserId(session.user.id);
      setUserEmail(session.user.email);
    }
  }, [session?.user?.id, session?.user?.email]);

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

  return (
    <Layout>
      <h1 className="text-4xl mb-4 text-gray-800 text-center md:text-left">
        My profile
      </h1>
      <Card>
        <div>
          <img
            className="w-full mb-4 rounded-md"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            alt="Profile picture"
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
        <p>
          <span className="font-semibold text-aulaBlack">UserID:</span> {userId}
        </p>
        <p>
          <span className="font-semibold text-aulaBlack">Email:</span>{" "}
          {userEmail}
        </p>
      </Card>
      {/* {isNfts && (
        <div>
          <Card>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=904&q=80"
                  alt=""
                />
              </div>
              <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                />
              </div>
              <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1601581875039-e899893d520c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt=""
                />
              </div>
              <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1517926967795-31943e805dae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt=""
                />
              </div>
            </div>
          </Card>
        </div>
      )} */}
    </Layout>
  );
}
