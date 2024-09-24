export async function fetchJobData(job, location) {
  const url =
    location.value === "anywhere"
      ? `https://jobicy.com/api/v2/remote-jobs?tag=${job.value}&count=10`
      : `https://jobicy.com/api/v2/remote-jobs?tag=${job.value}&count=10&geo=${location.value}`;
  console.log(url);
  try {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    return data;
  } catch (error) {
    return { error: error.message };
  }
}
