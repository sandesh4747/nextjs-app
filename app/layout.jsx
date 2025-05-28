import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="p-5">{children}</main>
      </body>
    </html>
  );
}
