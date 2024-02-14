"use client";

import Footer from "./components/Footer";
import Header from "./components/Header";
import NavbarMobile from "./components/Navbar-Mobile";
import "./globals.css";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`${navOpen && "h-screen m-0 overflow-hidden"}`}>
        <NavbarMobile setNavOpen={setNavOpen} navOpen={navOpen} />
        <Header setNavOpen={setNavOpen} navOpen={navOpen} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
