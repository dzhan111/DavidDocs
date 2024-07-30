import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Live Docs",
  description: "Your go-to collaborative editor",
};


export default function RootLayout(
  {children} : {children: React.ReactNode}) {
  return (
    <ClerkProvider appearance={{
      baseTheme : dark,
      variables: {
        colorPrimary : "#3371FF",
        fontSize :  '16px'
      }
      
    }}>
      <html lang="en">
        <body className={inter.className}>
          <Provider>
            {children}
          </Provider>
          
          </body>
      </html>
    </ClerkProvider>
  );
}
