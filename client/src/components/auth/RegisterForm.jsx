import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/authActions";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledBox = styled(Box)(({ theme }) => ({
  maxWidth: 360,
  width: "100%",
  margin: "auto",
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
  borderRadius: theme.shape.borderRadius,
}));

const StyledTypography = styled(Typography)({
  marginBottom: "16px",
  textAlign: "center",
});

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "4px",
  },
});

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(register({ name, email, password }));
    navigate("/login");
  };

  return (
    <StyledBox>
      <StyledTypography variant="h5" gutterBottom>
        Register
      </StyledTypography>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTextField
          type="text"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
        />
        <StyledTextField
          type="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
        />
        <StyledTextField
          type="password"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
        />
        <StyledButton type="submit" variant="contained" color="primary">
          Register
        </StyledButton>
      </StyledForm>
      <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
        Already have an account? <Link to="/login">Login</Link>
      </Typography>
    </StyledBox>
  );
};

export default RegisterForm;
