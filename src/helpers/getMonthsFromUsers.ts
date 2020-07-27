import { User } from "../interfaces/User";
import { getMonthFromBirtday } from "./getMonthFromBirtday";

export const getMonthsFromUsers = (users: User[]): string[] => {
  // console.log("users getMonths=", users);
  let allMonths = new Set();
  // console.log("months=", months);
  // if (users.length) getMonthFromBirtday(users[0]);
  users.forEach((user) => {
    allMonths.add(getMonthFromBirtday(user));
  });
  const months = Array.from(allMonths).sort() as string[];
  return months;
};
