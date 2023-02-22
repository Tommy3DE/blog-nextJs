import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
        <div className="mx-auto w-full px-6">
          <Header/>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
