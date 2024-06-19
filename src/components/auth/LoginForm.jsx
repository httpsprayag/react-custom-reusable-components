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

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login({ username, password }));
    navigate("/dashboard");
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        {error && (
          <Typography variant="body2" color="error">
            {error.message}
          </Typography>
        )}
        <TextField
          type="text"
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
          sx={{ mt: 2 }}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
      <Typography variant="body2" sx={{ mt: 2 }}>
        Don't have an account? <Link to="/register">Register</Link>
      </Typography>
    </Box>
  );
};

export default LoginForm;
