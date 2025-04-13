import Header from "./_components/Header";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";

// import fonts from "next/font/google";
import { Josefin_Sans } from "next/font/google";

//configure the font
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap", // fallback to system fonts
  weight: ["400", "700"],
});

export const metadata = {
  // title: "The wild oasis",
  title: {
    default: "The wild oasis",
    template: "%s | The wild oasis",
  },
  description: "visit world's best cabins hotels in the wild",
  keywords: "wild, oasis, cabins, hotels, travel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1  px-8 py-12">
          <main className="max-w-7xl mx-auto">{children} </main>
        </div>

        <footer>Copyright</footer>
      </body>
    </html>
  );
}
