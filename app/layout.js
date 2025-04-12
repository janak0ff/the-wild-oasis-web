import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";

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
      <body className="bg-primary-950 text-primary-100 min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children} </main>
        <footer>Copyright</footer>
      </body>
    </html>
  );
}
