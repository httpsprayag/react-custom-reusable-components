import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "../features/auth/authActions";
import {
  selectAuthUser,
  selectAuthLoading,
} from "../features/auth/authSelectors";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);
  const loading = useSelector(selectAuthLoading);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      {user && (
        <Box>
          <Typography variant="body1">Welcome, {user.name}!</Typography>
          <Typography variant="body2">Email: {user.email}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default DashboardPage;
