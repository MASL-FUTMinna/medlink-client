type AppointmentStatus = "pending" | "cancelled" | "completed";

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

interface PractitionerAppointmentPayload {
  status : string;
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
  status: AppointmentStatus;
}

interface UserAppointmentResponse {
  data: UserAppointment[];
  meta: MetaData;
}

interface PractitionerAppointmentResponse {
  data: practitionerAppointments[];
  meta: MetaData;
}

interface PractitionerAppointments {
  date: string;
  time: string;
  id: number;
  status: AppointmentStatus;
  user: AppointmentUser;
}
