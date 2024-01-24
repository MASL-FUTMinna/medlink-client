import History from "@/components/History";
import { cookies } from 'next/headers'

export default function Page() {
  const cookieStore = cookies()
  const token = cookieStore.get('token')

  return (
    <History token={token}/>
  );
}
