interface AppointmentType {
  date: string;
  time: string;
  practitioner: PractitionerType;
  user: User;
  id: number;
}

interface AppointmentPayload {
  userId: string;
  practitionerId: string;
  date: string;
  time: string;
  timeZone: string;
}
