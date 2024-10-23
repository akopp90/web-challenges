import Link from "next/link";
import useSWR from "swr";

export default function ProductsPage() {
  const { data } = useSWR("/api/products");

  if (!data) return <div>Loading...</div>;

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <h2>
            <Link href={"/products/" + product.id}>{product.name}</Link>
          </h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
        </li>
      ))}
    </ul>
  );
}
