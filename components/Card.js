export default function Card({ children, noPadding, marginBottom, nftCard }) {
  let classes = "bg-white dark:bg-gray-800 rounded-xl shadow-xl shadow-gray-200 dark:shadow-none border border-1 border-gray-100 dark:border-gray-900";

  if (!noPadding) {
    classes += " p-4";
  }

  if (marginBottom) {
    classes += " mb-4";
  }

  if (nftCard) {
    classes += " md:hover:-translate-y-1 md:hover:scale-105 transition ease-in-out duration-300";
  }

  return <div className={classes}>{children}</div>;
}
