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
          <h1>Nowy Blog</h1>
        </header>
        {children}
        <footer>2023®</footer>
      </body>
    </html>
  );
}
