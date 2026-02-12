import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import Providers from "@/providers";
import { SmoothScroll } from "@/components/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MeshKloud",
  description:
    "Join MeshKloud early access. Only 500 early members will be selected. Private beta opens in Q2 with exclusive benefits and influence for early users. Secure your spot now.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "scrollbar antialiased",
          geistSans.variable,
          geistMono.variable,
          spaceGrotesk.variable
        )}
      >
        <Providers>
          <SmoothScroll>
            <div id="app" className="flex min-h-dvh flex-col">
              <Header />
              <main className="relative flex-1">{children}</main>
              <Footer />
            </div>
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
