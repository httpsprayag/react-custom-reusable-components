import { useSelector } from "react-redux";
import {
  selectAuthToken,
  selectAuthUser,
} from "../features/auth/authSelectors";

const useAuth = () => {
  const token = useSelector(selectAuthToken);
  const user = useSelector(selectAuthUser);
  return { token, user };
};

export default useAuth;
