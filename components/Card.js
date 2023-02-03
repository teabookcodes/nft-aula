export default function Card({ children, noPadding }) {
  let classes =
    "bg-white rounded-md mb-5 shadow-md shadow-gray-300 overflow-hidden";

  if (!noPadding) {
    classes += " p-4";
  }

  return <div className={classes}>{children}</div>;
}
