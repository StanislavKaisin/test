import { useState, useEffect } from "react";
import axios from "axios";
import { getMonthsFromUsers } from "../helpers/getMonthsFromUsers";
import { getUsersPerMonth } from "../helpers/getUsersPerMonth";
import { UsersPerMonth } from "../interfaces/UsersPerMonth";

const API = `https://yalantis-react-school-api.yalantis.com/api/task0/users`;

export function useAPI() {
  const [users, setUsers] = useState([]);
  const [months, setMonths] = useState<string[]>([]);
  const [usersPerMonth, setUsersPerMonth] = useState<UsersPerMonth[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(API)
      .then((data) => {
        // console.log("data=", data.data);
        setUsers(data.data);
        // console.log("users=", users);
        // console.log("loading=", loading);
        if (data.data?.length) {
          const monthsList = getMonthsFromUsers(data.data);
          // console.log("monthsList=", monthsList);
          const users = getUsersPerMonth(monthsList, data.data);
          setUsersPerMonth(users);
          setMonths(monthsList);
        }

        // setMonths(monthsList);
        setLoading(false);
        return { users };
      })
      .then(({ users }) => {
        // console.log("users=", users);
      })
      .catch((error) => {
        // console.log("error=", error);
        setError(error);
        setLoading(false);
      });
    // console.log("users=", users);
    return () => {
      console.log("users=", users);
    };
  }, []);
  // console.log("users=", users);

  return { users, error, loading, months, usersPerMonth };
}
