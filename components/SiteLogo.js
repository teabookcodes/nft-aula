import Link from "next/link";
import Image from "next/image";

export default function SiteLogo() {
  return (
    <Link href="https://www.nftaula.io/">
      <Image src="logo.svg" width="180" height="180" alt="NFTaula logo" />
    </Link>
  );
}
