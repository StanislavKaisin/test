import { User } from "../interfaces/User";
import { getMonthFromBirtday } from "./getMonthFromBirtday";

export const getMonthsFromUsers = (users: User[]): string[] => {
  let allMonths = new Set();
  users.forEach((user) => {
    allMonths.add(getMonthFromBirtday(user));
  });
  const months = Array.from(allMonths).sort() as string[];
  return months;
};
