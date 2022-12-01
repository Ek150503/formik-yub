import * as yub from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 uppercase letter, 1 lower case letter, 1 numberic digit

export const basicSchemas = yub.object().shape({
  email: yub.string().email("Please enter a valid email").required("Require"),
  age: yub
    .number("Age must be a number")
    .positive("Age must be a possitive")
    .integer("Age must be an integer")
    .required("Require"),
  password: yub
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password." })
    .required("Require"),
  confirmPassword: yub
    .string()
    .oneOf([yub.ref("password"), null], "Password must match")
    .required("Require"),
});
