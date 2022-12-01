import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 uppercase letter, 1 lower case letter, 1 numberic digit

export const basicSchemas = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Require"),
  age: yup
    .number("Age must be a number")
    .positive("Age must be a possitive")
    .integer("Age must be an integer")
    .required("Require"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password." })
    .required("Require"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Require"),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
  jobType: yup
    .string()
    .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
    .required("Required"),
  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service"),
});
