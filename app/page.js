import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Page() {
  return (
    <div>
      <Navigation />
      <h1>Hello Next!</h1>
      <Link href={"/about"}>About</Link>
      <Link href="/cabins">Cabins</Link>
    </div>
  );
}
