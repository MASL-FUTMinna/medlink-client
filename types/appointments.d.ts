interface AppointmentType {
  date: string;
  time: string;
  practitioner: PractitionerType;
  user: AppointmentUser;
  id: number;
}

interface AppointmentPayload {
  userId: string;
  practitionerId: string;
  date: string;
  time: string;
  timeZone: string;
}

interface AppointmentUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

interface UserAppointment {
  date: string;
  time: string;
  practitioner: PractitionerType;
  id: number;
}

interface UserAppointmentResponse {
  data: UserAppointment[];
  meta: MetaData;
}
