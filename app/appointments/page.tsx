import HospitalPage from "@/components/hospitals/HospitalPage";
import HospitalsList from "@/components/hospitals/HospitalsList";
import Button from "@/components/ui/Button";
import Image from "next/image";

async function getData() {
	try {
		const res = await fetch(`https://medlink-server-production.up.railway.app/hospitals/`);
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
