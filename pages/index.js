import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data } = useSWR("../api/random-character", fetcher);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>
        Name: {data.firstName} {data.lastName}
      </h1>
      <h2>Twitter: {data.twitter}</h2>
      <p>{data.geohash}</p>
    </>
  );
}
