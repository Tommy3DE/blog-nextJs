import Image from "next/image";
import Link from "next/link";

const Header = () => (
  <header className="text-center bg-slate-800 p-8 my-6 rounded-md">
    <Image
      src="/favicon.ico"
      alt="logo"
      width={200}
      height={200}
      className="mx-auto"
    />
    <Link href="/">
      <h1 className="text-2xl text-white font-bold mt-6">
        Witaj na moim blogu
      </h1>
    </Link>
    <p className="text-slate-300">
      Został wykonany w NextJs z uyciem TailwindCss
    </p>
  </header>
);
export default Header