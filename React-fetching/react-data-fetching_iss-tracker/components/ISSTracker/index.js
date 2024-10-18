import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function ISSTracker() {
  const { data, error, isLoading, mutate } = useSWR(
    "http://api.open-notify.org/iss-now.json",
    fetcher,
    { refreshInterval: 5000 } // Implement 5-second interval
  );

  const coords = data
    ? {
        longitude: data.iss_position.longitude,
        latitude: data.iss_position.latitude,
      }
    : { longitude: 0, latitude: 0 };

  const getISSCoords = () => {
    mutate();
  };
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!data || !data.iss_position) return null;

  return (
    <main>
      <Map
        longitude={data.iss_position.longitude}
        latitude={data.iss_position.latitude}
      />
      <Controls
        longitude={Number(data.iss_position.longitude)}
        latitude={Number(data.iss_position.latitude)}
        onRefresh={() => mutate()}
      />
    </main>
  );
}

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};
