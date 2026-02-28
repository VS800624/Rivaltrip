import { BASE_URL } from "@/utils/constants";
import axios from "axios";
import { useEffect, useState } from "react";

// export const useAuth = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get(BASE_URL + "/me", { withCredentials: true })
//       .then(res => setUser(res.data.user))
//       .catch(() => setUser(null))
//       .finally(() => setLoading(false));
//   }, []);

//   return { user, loading };
// };

// or
export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(BASE_URL + "/me", {
         withCredentials: true
        });
        setUser(res.data.user);
      } catch (err) {
        console.error(err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);
  
  return {user, loading}
};

// export const useAuth = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // TEMP: Fake admin user for testing
//     const fakeAdmin = {
//       id: 1,
//       name: "Admin Test",
//       email: "admin@test.com",
//       role: "admin",
//     };

//     setUser(fakeAdmin);
//     setLoading(false);
//   }, []);

//   return { user, loading };
// };


// API call → Success? → then()
//           → Error?   → catch()
//           → Always   → finally()