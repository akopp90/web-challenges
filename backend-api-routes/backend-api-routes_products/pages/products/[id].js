import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(id ? `/api/products/${id}` : null);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  console.log(data);
  if (!data) {
    return;
  }

  return (
    <>
      <ul>
        <li key={id}>
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <p>Price: ${data.price}</p>
          <p>Category: {data.category}</p>
        </li>
      </ul>
      <Link href="/products">Back to all</Link>
    </>
  );
}
