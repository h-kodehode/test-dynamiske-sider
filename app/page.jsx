import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20">
      <main>
        <h1 className="text-amber-200 text-4xl mb-8">Dette er forsiden</h1>
        <Link className="hover:text-amber-200 text-xl" href="/products">
          Gå til produkt siden
        </Link>
      </main>
    </div>
  );
}
