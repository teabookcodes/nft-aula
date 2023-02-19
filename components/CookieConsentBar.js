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
    <div className="bg-indigo-500 text-white py-2 px-4 fixed bottom-0 left-0 w-full flex items-center justify-between">
      <p className="inline-block mr-2">This website uses cookies to ensure you get the best experience on our website. Learn more</p>
      <div>
        <button className="bg-transparent text-white border-2 border-white font-semibold py-2 px-4 rounded-md inline-block mr-2" onClick={handleDecline}>Decline</button>
        <button className="bg-white text-indigo-500 border-2 border-white font-semibold py-2 px-4 rounded-md inline-block" onClick={handleConsent}>I understand</button>
      </div>
    </div>
  );
};

export default CookieConsentBar;
