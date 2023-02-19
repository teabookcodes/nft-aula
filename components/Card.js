export default function Card({ children, noPadding, marginBottom, nftCard }) {
  let classes = "bg-white rounded-md shadow-xl shadow-gray-200 border border-1 border-gray-100";

  if (!noPadding) {
    classes += " p-4";
  }

  if (marginBottom) {
    classes += " mb-4";
  }

  if (nftCard) {
    classes += " hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-300";
  }

  return <div className={classes}>{children}</div>;
}
