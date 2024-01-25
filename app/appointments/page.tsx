import HospitalPage from "@/components/hospitals/HospitalPage";

async function getData() {
  try {
    const res = await fetch(
      `https://medlink-server-production.up.railway.app/hospitals/`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch hospital data");
    }
    return res.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function Page() {
  const data = await getData();
  return <HospitalPage data={data} />;
}
