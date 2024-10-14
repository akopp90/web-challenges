import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <Link href="/volumes">Volumes Overview</Link>
    </div>
  );
}
