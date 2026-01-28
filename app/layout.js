import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "Simple Pilates Reservation",
  description: "Pilates class reservation app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    background: "#F9FAF7",
                    primary: "#7BAE9E",
                    secondary: "#CFE6DF",
                    accent: "#E6DCD0",
                    textPrimary: "#2E2E2E",
                    textSecondary: "#6B6B6B"
                  }
                }
              }
            }
          `,
          }}
        />
      </head>
      <body className="bg-background text-textPrimary min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
