interface HospitalsResponse {
  data: HospitalItemType[];
  meta: MetaData;
}

interface HospitalDetail {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  practitioners: HospitalPractioner[];
}

interface HospitalPractioner {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  bio: string;
  specialization: string;
  photoUrl: string;
}
