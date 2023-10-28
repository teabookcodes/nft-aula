import Image from "next/image";

const MaintenancePage = () => {
  const handleClose = () => {
    window.location.href = "https://twitter.com/NFTaula";
  };

  return (
    <div
      className="
      min-h-screen
      flex
      flex-col
      items-center
      pb-20
      pt-48
      md:pt-80
      px-16
      bg-gray-900
    text-white"
    >
      <Image src="/logo.svg" height="280" width="280" alt="NFTaula Logo" />
      <p className="mt-4 text-lg text-center">
        We will be back soon.
        <br />
        Thanks for hanging in there while we try to craft an amazing experience
        just for you!
      </p>
    </div>
  );
};

export default MaintenancePage;
