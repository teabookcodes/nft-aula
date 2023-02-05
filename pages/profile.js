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
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    if (!session) {
      return;
    } else {
      setUserId(session.user.id);
      setUserEmail(session.user.email);
    }
  }, [session?.user?.id, session?.user?.email]);

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
