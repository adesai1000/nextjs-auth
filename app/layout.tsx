// app/layout.tsx
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
      <body>{children}</body>
    </html>
  );
}
