import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),
  password: yup.string().required("Password is required"),
});

export const signupSchema = yup.object({
  firstName: yup.string().required("First name is Required"),
  lastName: yup.string().required("Last name is Required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /((?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*\W)\w.{6,18}\w)/,
      "Password should have at least one upper and lowercase, a number and a special character"
    ),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match"),
});

export interface LoginSchemaType extends yup.InferType<typeof loginSchema> {}
export interface SignupSchemaType extends yup.InferType<typeof signupSchema> {}
