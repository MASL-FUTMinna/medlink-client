interface PractitionerType {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  bio: string;
  specialization: string;
  photoUrl: string;
  hospital?: HospitalItemType;
  hospital_name?: string;
}
