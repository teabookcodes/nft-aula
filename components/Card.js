export default function Card({ children, noPadding, marginBottom }) {
  let classes = "bg-white rounded-md shadow-md shadow-gray-300";

  if (!noPadding) {
    classes += " p-4";
  }

  if (marginBottom) {
    classes += " mb-4";
  }

  return <div className={classes}>{children}</div>;
}
