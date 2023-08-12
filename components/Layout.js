import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import SiteLogo from "./SiteLogo";
import NavigationCard from "./NavigationCard";
import CookieConsentBar from "./CookieConsentBar";
// import WelcomePopup from "./WelcomePopup";
import Footer from "./Footer";
import { Router } from "next/router";

export default function Layout({ children, hideNavigation }) {
  let rightColumnClasses = "";
  if (hideNavigation) {
    rightColumnClasses += "w-full";
  } else {
    rightColumnClasses += "mx-4 md:mx-0 md:w-full";
  }

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button onClick={() => setTheme("light")} className="mr-4 md:mr-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#FFFFFF"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </button>
      );
    } else {
      return (
        <button onClick={() => setTheme("dark")} className="mr-4 md:mr-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#181818"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </button>
      );
    }
  };

  return (
    <div>
      <div className="absolute top-8 right-2 md:right-4 lg:right-6">
        {renderThemeChanger()}
      </div>
      <div className="flex w-full items-center justify-center pt-4 px-4">
        <div>
          <SiteLogo />
        </div>
      </div>
      <div className="md:flex max-w-screen-xl mt-4 mx-auto gap-6 md:pr-4 mb-24 md:mb-0">
        {!hideNavigation && (
          <div className="z-50 fixed md:static w-full bottom-0 md:w-24 md:pl-4 -mb-5">
            <NavigationCard />
          </div>
        )}

        <div className={rightColumnClasses}>{children}</div>
      </div>
      {/* <WelcomePopup /> */}
      <CookieConsentBar />
      <Footer />
    </div>
  );
}
