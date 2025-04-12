import Link from "next/link";
import Navigation from "./_components/Navigation";

export default function Page() {
  return (
    <div>
      <h1>Hello Next!</h1>
      <Link href="/cabins">Cabins</Link>
    </div>
  );
}
