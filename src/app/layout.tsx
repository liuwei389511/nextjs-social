import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./commponents/Navbar";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config/wagmi'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Dev Social Media App",
  description: "Social media app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

const queryClient = new QueryClient()

  return (
    // <WagmiProvider  config={config}>
    //     <QueryClientProvider client={queryClient}>
        <html lang="en">
            <body className={inter.className}>
            <div className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                <Navbar />
            </div>
            <div className="bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                {children}
            </div>
            </body>
        </html>
    //    {/* </QueryClientProvider>
    // </WagmiProvider> */}
  );
}