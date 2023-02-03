import { headers } from "next/headers";
import { CookiesProviderWrapper } from "./CookiesProviderWrapper";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const cookie = headersList.get("cookie");

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <CookiesProviderWrapper cookie={cookie}>
          {children}
        </CookiesProviderWrapper>
      </body>
    </html>
  );
}
