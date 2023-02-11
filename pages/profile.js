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
        <div className="flex gap-3">
          <div>
            <img
              className="w-24 w-full rounded-md"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              alt="Profile picture"
            />
          </div>
          <div>
            <p>
              <span className="font-semibold text-aulaBlack">UserID:</span>{" "}
              {userId}
            </p>
            <p>
              <span className="font-semibold text-aulaBlack">Email:</span>{" "}
              {userEmail}
            </p>
          </div>
        </div>
      </Card>
    </Layout>
  );
}
