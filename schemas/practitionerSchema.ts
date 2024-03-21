import * as yup from "yup";

const VALID_IMAGE_TYPES = ["image/jpeg", "image/png", "image/gif"];
const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5 MB

export const practitionerSignupSchema = yup.object({
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
  bio: yup.string().required("Your Bio is Required"),
  specialization: yup.string().required("Specialization is Required"),
  hospitalId: yup.number().required("Hospital is Required"),
  photo: yup
    .mixed()
    .required("Please select an image file.")
    .test("fileSize", "Image size exceeds maximum limit of 2MB.", (value) => {
      if (!value) {
        return true; // Skip validation if no file is selected
      }

      return value.size <= MAX_IMAGE_SIZE;
    }),
});

export interface PractitionerSignupSchemaType
  extends yup.InferType<typeof practitionerSignupSchema> {}
