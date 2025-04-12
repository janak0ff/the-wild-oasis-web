import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

export const metadata = {
  title: "The wild oasis",
  description: "visit world's best cabins",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
