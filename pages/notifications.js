import Link from "next/link";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Avatar from "../components/Avatar";

export default function NotificationsPage() {
  return (
    <Layout>
      <h1 className="text-5xl mb-4 text-gray-800 text-center md:text-left">
        Notifications
      </h1>
      <Card noPadding={true}>
        <div className="">
          <div className="flex gap-2 items-center border-b border-b-gray-100 p-4">
            Sample notification
          </div>
        </div>
      </Card>
    </Layout>
  );
}
