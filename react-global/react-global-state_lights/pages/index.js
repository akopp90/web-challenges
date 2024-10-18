import Link from "../components/Link";

export default function HomePage({ countLightsOn }) {
  return (
    <>
      <h1>Home</h1>
      <p>{countLightsOn} light(s) are on.</p>
      <Link href="/rooms">All Rooms →</Link>
      <Link href="/actions">Quick Actions →</Link>
    </>
  );
}
