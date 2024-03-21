interface MetaData {
  page: number;
  limit: number;
  itemCount: number;
  totalItemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

interface HospitalItemType {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
}

interface AppointmentObj {
  date: string;
  time: string;
}
