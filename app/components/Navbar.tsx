import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-4xl mx-auto px-4 py-5">
      <Link href="/" >
        <Image 
          className="rounded-full"
          src="/Logo-mints.png"
          width={50}
          height={50}
          alt="mints logo"
        />
      </Link>
        <h1 className="font-bold text-xl">Mints <span className="text-primary">On The </span>House</h1>
      <ModeToggle />
    </nav>
  );
}