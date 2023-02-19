import SiteLogo from "./SiteLogo";
import NavigationCard from "./NavigationCard";
import Footer from "./Footer";

export default function Layout({ children, hideNavigation }) {

  let rightColumnClasses = "";
  if (hideNavigation) {
    rightColumnClasses += "w-full";
  } else {
    rightColumnClasses += "mx-4 md:mx-0 md:w-full";
  }

  return (
    <div>
      <div className="flex w-full items-center justify-center py-4 bg-aulaBlack">
        <div className="mx-auto">
          <SiteLogo />
        </div>
      </div>
      <div className="md:flex max-w-screen-2xl mt-4 mx-auto lg:mx-8 gap-6 md:pr-4 mb-24 md:mb-0">
        {!hideNavigation && (
          <div className="z-50 fixed md:static w-full bottom-0 md:w-24 md:pl-4 -mb-5">
            <NavigationCard />
          </div>
        )}

        <div className={rightColumnClasses}>{children}</div>
      </div>
        <Footer />
    </div>
  );
}
