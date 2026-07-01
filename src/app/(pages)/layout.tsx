import { Metadata } from "next";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/css/style.css";

export const metadata: Metadata = {
  title: "石井花壇 | 温海温泉旅館公式サイト",
  description: "日本古来の素材と現代的表現を併せ持つ温泉旅館、石井花壇。伝統的「和」の息づく空間で、至極のひとときをお過ごしください。",
};

export default function RootLayout({ children }: { children: ReactNode }){
  return (
    <html lang="jp" className="h-full antialiased">
      <body className="body min-h-full flex flex-col">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
};