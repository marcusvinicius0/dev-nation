import { Inter } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Devnation",
  description: "A fullstack socialmedia platform with Next.js",
};

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white text-slate-900 antialiased light",
        inter.className
      )}
    >
      <body className="min-h-screen pt-14 antialiased">
        <Navbar />

        {authModal}

        <div className="container max-7xl mx-auto h-full pt-12">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
