import { useState } from "react";
import * as yup from "yup";

const useForm = (initialValues, validationSchema) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const yupSchema = yup.object().shape(validationSchema);

  const handleChange = (name) => (event) => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setValues({ ...values, [name]: value });
    setTouched({ ...touched, [name]: true });
  };

  const handleBlur = (name) => () => {
    setTouched({ ...touched, [name]: true });
    validateField(name);
  };

  const validateField = async (name) => {
    try {
      await yupSchema.validateAt(name, values);
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } catch (error) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: error.message }));
    }
  };

  const handleSubmit = (callback) => async (event) => {
    event.preventDefault();

    try {
      await yupSchema.validate(values, { abortEarly: false });
      callback(values);
      resetForm();
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((fieldError) => {
        newErrors[fieldError.path] = fieldError.message;
      });
      setErrors(newErrors);
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  };
};

export default useForm;
