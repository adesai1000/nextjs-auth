import Navbar from "@/components/auth/navbar";
import "./globals.css";

export const metadata = {
  title: "Auth.js App",
  description: "Generated for Learning Auth.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
