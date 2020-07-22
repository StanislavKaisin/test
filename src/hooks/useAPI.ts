import { useState, useEffect } from "react";
import axios from "axios";

const API = `https://yalantis-react-school-api.yalantis.com/api/task0/users`;

export function useAPI() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(API)
      .then((data) => {
        console.log("data=", data.data);
        setUsers(data.data);
      })
      .catch((error) => {
        console.log("error=", error);
        setError(error);
      });
  }, []);

  return { users, error };
}
