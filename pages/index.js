import Layout from "../components/Layout";
import Card from "../components/Card";
import { useSession } from "@supabase/auth-helpers-react";
import LoginPage from "./login";
import { useState, useEffect } from "react";

export default function Home() {
  const session = useSession();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    if (!session) {
      return;
    } else {
      setUserEmail(session.user.email);
    }
  }, [session?.user?.email]);

  // if (!session) {
  //   return <LoginPage />;
  // }

  return (
    <Layout>
      {/* <h1 className="text-4xl mb-4 text-gray-800 text-center md:text-left">
        Home
      </h1> */}
      <Card>
        {session && (
          <p>
            Hello,{" "}
            <span className="font-semibold text-aulaBlack">{userEmail}</span>!
          </p>
        )}
        {!session && (
          <p>
            Welcome to the
            <span className="font-semibold text-aulaBlack"> NFTaula</span>!
          </p>
        )}
      </Card>
    </Layout>
  );
}
