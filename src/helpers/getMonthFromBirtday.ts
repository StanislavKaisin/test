import { User } from "../interfaces/User";

export const getMonthFromBirtday = (user: User): string => {
  const month = user.dob.split("-").slice(0, 2).join("-");
  return month;
};
