import { useFormik } from "formik";
import { basicSchemas } from "../schemas";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const BasicForm = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchemas,
    onSubmit,
  });

  console.log(errors);
  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <label htmlFor='email'>Email</label>
      <input
        value={values.email}
        id='email'
        type='email'
        placeholder='Enter your email'
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className='error'>{errors.email}</p>}
      <label htmlFor='email'>Age</label>
      <input
        value={values.age}
        id='age'
        type='number'
        placeholder='Enter your age'
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.age && touched.age ? "input-error" : ""}
      />
      {errors.age && touched.age && <p className='error'>{errors.age}</p>}
      <label htmlFor='email'>Password</label>
      <input
        value={values.password}
        id='password'
        type='password'
        placeholder='Enter your password'
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && (
        <p className='error'>{errors.password}</p>
      )}
      <label htmlFor='email'>Confirm Password</label>
      <input
        value={values.confirmPassword}
        id='confirmPassword'
        type='password'
        placeholder='Confirm password'
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.confirmPassword && touched.confirmPassword ? "input-error" : ""
        }
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <p className='error'>{errors.confirmPassword}</p>
      )}

      <button type='submit' disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};
export default BasicForm;
