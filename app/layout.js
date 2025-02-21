// app/layout.js
import { Poppins } from "next/font/google";
import "./globals.css"; // Global styles
import NavBar from "components/NavBar"; // Adjust the import path as necessary

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"]
});

export const metadata = {
  title: "Horizon",
  heading: "Welcome to Horizon",
  description: "Horizon is the weather report application where you can search for weather across countries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/horizon-logo.png" />
      </head>
      <body className={`${poppins.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
