/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/auth/authActions";
import {
  selectAuthLoading,
  selectAuthError,
} from "../../features/auth/authSelectors";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledBox = styled(Box)(({ theme }) => ({
  maxWidth: 360,
  width: "100%",
  margin: "auto",
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[4],
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

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login({ email, password }));
    navigate("/dashboard");
  };

  return (
    <StyledBox>
      <StyledTypography variant="h5" gutterBottom>
        Login
      </StyledTypography>
      <StyledForm onSubmit={handleSubmit}>
        {error && (
          <Typography variant="body2" color="error">
            {error.message}
          </Typography>
        )}
        <StyledTextField
          type="email" // Change type to email
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
        <StyledButton
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </StyledButton>
      </StyledForm>
      <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
        Don't have an account? <Link to="/register">Register</Link>
      </Typography>
    </StyledBox>
  );
};

export default LoginForm;
