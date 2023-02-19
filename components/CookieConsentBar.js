import { useState, useEffect } from "react";

const CookieConsentBar = () => {
  const [consent, setConsent] = useState(false);
  const [decline, setDecline] = useState(false);

  const handleConsent = () => {
    setConsent(true);
    if (typeof window !== "undefined") {
      localStorage.setItem("cookie_consent", "true");
    }
  };

  const handleDecline = () => {
    setDecline(true);
    if (typeof window !== "undefined") {
      localStorage.setItem("cookie_decline", "true");
    }
  };

  useEffect(() => {
    const isConsented = typeof window !== "undefined" && localStorage.getItem("cookie_consent") === "true";
    const isDeclined = typeof window !== "undefined" && localStorage.getItem("cookie_decline") === "true";
    setConsent(isConsented);
    setDecline(isDeclined);
  }, []);


return (!consent && !decline) && (
    <div className="bg-indigo-500 text-white pt-2 pb-4 md:pb-2 px-4 fixed bottom-16 md:bottom-0 left-0 w-full flex items-center justify-between">
      <p className="inline-block mr-2">This website uses cookies to ensure you get the best experience on our website. <Link href="/cookies" className="underline">Learn more</Link></p>
      <div>
        <button className="bg-transparent text-white border-2 border-white font-semibold py-1 md:py-2 px-2 md:px-4 rounded-md inline-block mb-2 md:mb-0 mr-2" onClick={handleDecline}>Decline</button>
        <button className="bg-white text-indigo-500 border-2 border-white font-semibold py-1 md:py-2 px-2 md:px-4 rounded-md inline-block" onClick={handleConsent}>I got it</button>
      </div>
    </div>
  );
};

export default CookieConsentBar;