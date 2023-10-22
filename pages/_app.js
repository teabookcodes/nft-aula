import "../styles/globals.css";
import MaintenancePage from "@/components/MaintenancePage";
import { ThemeProvider } from "next-themes";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [maintenance, setMaintenance] = useState(true);
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  if (maintenance) {
    return <MaintenancePage />;
  }

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionContextProvider>
  );
}
