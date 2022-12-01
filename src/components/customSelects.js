import { useField } from "formik";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.error && meta.touched ? "input-error" : ""}
      />
      {meta.error && meta.touched && <div className='error'>{meta.error}</div>}
    </>
  );
};

export default CustomSelect;
