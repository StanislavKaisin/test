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
        setUsers(data.data);
        if (data.data?.length) {
          const monthsList = getMonthsFromUsers(data.data);
          const users = getUsersPerMonth(monthsList, data.data);
          setUsersPerMonth(users);
          setMonths(monthsList);
        }
        setLoading(false);
        return { users };
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  return { users, error, loading, months, usersPerMonth };
}
