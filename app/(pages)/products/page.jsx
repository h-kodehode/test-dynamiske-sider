import Link from "next/link";
import Image from "next/image";

export default async function ProductsPage() {
  const res = await fetch("http://localhost:3000/api/fetchApi");

  console.log(res);
  const products = await res.json();

  return (
    <div>
      <Link className="ml-5 hover:text-amber-200" href="/">
        Tilbake til Forsiden
      </Link>
      <h1 className="flex items-center justify-center text-3xl mb-10">
        Grønne Planter
      </h1>
      <ul className="grid grid-cols-4 gap-6 justify-center items-center">
        {/* {products.map((item) => (
          <li key={item.id}>
            <Link href={`/products/${item.id}`}>
              <Image
                src={item.image}
                alt={item.title}
                width={200}
                height={200}
              ></Image>
            </Link>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p className="text-xl">Pris: {item.price} kr</p>
          </li>
        ))} */}
      </ul>
    </div>
  );
}
