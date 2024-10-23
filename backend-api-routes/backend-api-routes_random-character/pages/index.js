import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data } = useSWR("/api/random-character", fetcher);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Random Character</h1>
      <p>
        Name: {data.firstName} {data.lastName}
      </p>
      <p>Twitter: {data.twitter}</p>
      <p>Location Hash: {data.geohash}</p>
      <p>Age: {data.age}</p>
      <p>Profession: {data.profession}</p>
      <p>Company: {data.company}</p>
      <p>Address: {data.address}</p>
      <p>Phone: {data.phone}</p>
    </div>
  );
}
