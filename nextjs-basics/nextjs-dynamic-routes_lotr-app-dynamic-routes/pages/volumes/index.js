import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import { useRouter } from "next/router";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function Volumes() {
  const router = useRouter();
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul style={{ listStyle: "none" }}>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => {
          if (confirm("Sure you want to a random volume?")) {
            router.push(`/volumes/${getRandomElement(volumes).slug}`);
          }
        }}
        style={{
          padding: "10px",
          backgroundColor: "blue",
          color: "white",
          border: "solid 1px blue",
          borderRadius: "5px",
        }}
      >
        Random Volume
      </button>
    </>
  );
}
