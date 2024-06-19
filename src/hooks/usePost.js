// // src/hooks/usePost.js
// import { useState } from "react";
// import axiosInstance from "../api/axios";

// const usePost = (url, options = {}) => {
//   const [response, setResponse] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const postData = async (data) => {
//     setLoading(true);
//     try {
//       const result = await axiosInstance.post(url, data, options);
//       setResponse(result.data);
//       setLoading(false);
//     } catch (err) {
//       setError(err);
//       setLoading(false);
//     }
//   };

//   return { response, loading, error, postData };
// };

// export default usePost;
