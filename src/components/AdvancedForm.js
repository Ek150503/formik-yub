import { Field, Form, Formik } from "formik";
import { advancedSchema } from "../schemas";
import CustomCheckbox from "./customCheckbox";
import CustomInput from "./customInput";
import CustomSelect from "./customSelects";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const AdvancedForm = () => {
  return (
    <Formik
      initialValues={{ username: "", jobType: "", acceptTos: false }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <Form>
          <CustomInput
            label='Username'
            name='username'
            type='text'
            placeholder='Enter your username'
          />

          <CustomSelect
            label='Job Types'
            name='jobType'
            placeholder='Please Select a job'
          >
            <option value=''>Please select a job type</option>
            <option value='developer'>Developer</option>
            <option value='designer'>Designer</option>
            <option value='manager'>Product Manager</option>
            <option value='other'>Other</option>
          </CustomSelect>

          <CustomCheckbox type='checkbox' name='acceptedTos' />

          <button type='submit' disabled={props.isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default AdvancedForm;
