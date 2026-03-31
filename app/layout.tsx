import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "iTrap - Your Dream Travel Partner",
  description: "Discover amazing destinations worldwide. Book tours, flights, and hotels with iTrap Travel Agency.",
  keywords: "travel agency, tour packages, book tours, travel destinations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
