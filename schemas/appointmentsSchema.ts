import * as yup from "yup";

export const bookAppointmentSchema = yup.object({
  date: yup.string().required("Date is required"),
  time: yup.string().required("Dime is required"),
});

export interface BookAppointmentSchemaType
  extends yup.InferType<typeof bookAppointmentSchema> {}
