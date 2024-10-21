import type { Metadata } from "next";
import localFont from "next/font/local";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { SideBar } from "@/components/SideBar";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MemoryLane",
  description: "Capture, organize, and revisit your memories.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-600`}
        >
          <div className="h-screen grid grid-cols-[300px_1fr]">
            <SideBar />
            <div className="p-4 bg-black">{children}</div>
          </div>
        </body>
      </UserProvider>
    </html>
  );
}
