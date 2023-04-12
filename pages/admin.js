import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";

export default function AdminPanel() {
    const [users, setUsers] = useState()
    const supabase = useSupabaseClient()
    const session = useSession()

    useEffect(() => {
        fetchUsers();
    }, [])

    async function fetchUsers() {
        const { data: { users }, error } = await supabase.auth.admin.listUsers({
            page: 1,
            perPage: 1000
        })
        if (users !== null) {
            setUsers(users)
        }
    }

    return (
        <Layout>
            {/* <div className="h-screen flex justify-center items-center">
                Admin Panel
            </div> */}
            {!session && (<div className="min-h-screen flex justify-center items-start">You are not allowed to view this area</div>)}
            {session && (<div className="min-h-screen flex justify-center items-start">
                <div className="w-full min-h-screen bg-white dark:bg-gray-800 rounded-md p-4">
                    <h3 className="text-2xl font-bold">Dashboard</h3>
                    <h4>Users</h4>
                    <div>{users}</div>
                </div>
            </div>)}
        </Layout>
    )
}