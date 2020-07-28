import { User } from "../interfaces/User";
import { getMonthFromBirtday } from "./getMonthFromBirtday";
import { UsersPerMonth } from "../interfaces/UsersPerMonth";
import { setColor } from "./setCoor";

export const getUsersPerMonth = (
  months: string[],
  users: User[]
): UsersPerMonth[] => {
  const usersPerMonth: { month: string; color: string; users: never[] }[] = [];
  months.forEach((month) => {
    usersPerMonth.push({ month, color: "", users: [] });
  });
  users.forEach((user) => {
    const userMonth = getMonthFromBirtday(user);
    usersPerMonth.find(
      (item: { month: string; color: string; users: { name: string }[] }) => {
        if (item.month === userMonth) {
          item.users.push({
            name: `${user.firstName} ${user.lastName}`,
          });
        }
      }
    );
  });
  usersPerMonth.forEach(
    (item: { month: string; color: string; users: { name: string }[] }) => {
      item.color = setColor(item.users);
    }
  );
  return usersPerMonth;
};
