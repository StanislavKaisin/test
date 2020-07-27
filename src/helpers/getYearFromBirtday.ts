import { User } from "../interfaces/User";

export const getYearFromBirtday = (user: User): string => {
  const year = user.dob.split("-").slice(0, 1).join("-");
  return year;
};
