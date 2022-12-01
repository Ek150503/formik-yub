import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.error && meta.touched ? "input-error" : ""}
      />
      {meta.error && meta.touched && <div className='error'>{meta.error}</div>}
    </>
  );
};

export default CustomInput;
