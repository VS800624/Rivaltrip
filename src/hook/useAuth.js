import { BASE_URL } from "@/utils/constants"
import axios from "axios"
import { useEffect, useState } from "react"

// export const useAuth = () => {
//   const [user, setUser] = useState(null)

//   useEffect(() => {
//     axios.get(BASE_URL + "/me", {withCredentials: true})
//     .then(res => setUser(res.data.user))
//     .catch(() => setUser(null))
//   }, [])
  
//   return {user}
// }

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TEMP: Fake admin user for testing
    const fakeAdmin = {
      id: 1,
      name: "Admin Test",
      email: "admin@test.com",
      role: "admin",
    };

    setUser(fakeAdmin);
    setLoading(false);
  }, []);

  return { user, loading };
};
