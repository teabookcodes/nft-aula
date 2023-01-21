export default function Avatar({ size }) {
  let width = "w-12";
  if (size == "lg") {
    width = "w-24 md:w-36";
  }
  return (
    <div className={`${width} rounded-full overflow-hidden`}>
      <img
        src="https://pbs.twimg.com/profile_images/1615477216946577409/Pq81Tl7z_400x400.jpg"
        alt=""
      />
    </div>
  );
}
