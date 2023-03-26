import { useState, useEffect } from "react";

const WelcomePopup = () => {
    const [consent, setConsent] = useState(false);

    const handleClose = () => {
        setConsent(true);
        if (typeof window !== "undefined") {
            localStorage.setItem("welcome_consent", "true");
        }
    };

    useEffect(() => {
        const isConsented =
            typeof window !== "undefined" && localStorage.getItem("welcome_consent") === "true";
        setConsent(isConsented);
    }, []);

    return !consent && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md text-center">
                <h1 className="text-aulaBlack text-3xl font-bold mb-4">Welcome to NFTaula.io!</h1>
                <p className="text-lg mb-4">Please note that our web app is currently in the testing phase, and there may be bugs. <br />Your uploaded NFT records could also be edited or deleted.</p>
                <p className="text-lg mb-4">Thank you for your patience and support as we work to improve the platform 💜</p>
                <button className="bg-indigo-500 text-white py-2 px-6 rounded-md font-semibold" onClick={handleClose}>Got it</button>
            </div>
        </div>
    );
};

export default WelcomePopup;