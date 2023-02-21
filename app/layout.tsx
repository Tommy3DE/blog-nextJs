import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <header>
          <Link href="/">
            <h1>Nowy Blog</h1>
          </Link>
        </header>
        {children}
        <footer>2023 ®</footer>
      </body>
    </html>
  );
}
