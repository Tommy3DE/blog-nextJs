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
            <Link href="/">
              <h1 className="text-3xl text-white font-bold">Nowy Blog</h1>
            </Link>
            <p className="text-slate-300">Witaj na moim blogu</p>
          </header>
          {children}
          <footer className="border-t text-center text-slate-500 border-slate-400 mt-6 py-6">
            <h3>2023 ®</h3>
          </footer>
        </div>
      </body>
    </html>
  );
}
