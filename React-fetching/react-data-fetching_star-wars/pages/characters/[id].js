import { useRouter } from 'next/router';
import Card from '../../components/Card';
import useSWR from 'swr';

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function Character() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(
    id ? `https://swapi.py4e.com/api/people/${id}` : null,
    fetcher
  );

  if (error) return <div>Failed to load character data</div>;
  if (isLoading) return <div>Loading...</div>;

  return <Card name={data.name} height={data.height} eyeColor={data.eye_color} birthYear={data.birth_year} />;
}
