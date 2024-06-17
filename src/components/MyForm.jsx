import { TextField, Button } from "@mui/material";
import * as yup from "yup"; // Import yup for schema validation
import useForm from "../hooks/useForm";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
};

const validationSchema = {
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Lastname is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
};

const MyForm = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useForm(initialValues, validationSchema);

  const onSubmit = (formData) => {
    console.log("Form submitted with values:", formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="First Name"
        value={values.firstName}
        onChange={handleChange("firstName")}
        onBlur={handleBlur("firstName")}
        error={touched.firstName && Boolean(errors.firstName)}
        helperText={touched.firstName && errors.firstName}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Last Name"
        value={values.lastName}
        onChange={handleChange("lastName")}
        onBlur={handleBlur("lastName")}
        error={touched.lastName && Boolean(errors.lastName)}
        helperText={touched.lastName && errors.lastName}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Email"
        value={values.email}
        onChange={handleChange("email")}
        onBlur={handleBlur("email")}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
      <Button
        type="button"
        variant="contained"
        color="secondary"
        onClick={resetForm}
      >
        Reset
      </Button>
    </form>
  );
};

export default MyForm;
