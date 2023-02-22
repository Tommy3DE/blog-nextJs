import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div className="mx-auto max-w-2xl px-6">
          <header className="text-center bg-slate-800 p-8 my-6 rounded-md">
            <Image src="/favicon.ico" alt="logo" width={200} height={200} className='mx-auto'/>
            <Link href="/">
              <h1 className="text-2xl text-white font-bold mt-6">Nowy Blog</h1>
            </Link>
            <p className="text-slate-300">Witaj na moim blogu</p>
          </header>
          {children}
          <footer>
            <div  className="border-t text-center text-slate-500 border-slate-400 py-6 mt-12">
              <h3>Tomasz Kuniewicz 2023 ®</h3>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
