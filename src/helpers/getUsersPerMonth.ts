import { User } from "../interfaces/User";
import { getMonthFromBirtday } from "./getMonthFromBirtday";
import { UsersPerMonth } from "../interfaces/UsersPerMonth";
import { setColor } from "./setCoor";

export const getUsersPerMonth = (
  months: string[],
  users: User[]
): UsersPerMonth[] => {
  // console.log("months=", months);
  // console.log("users=", users);
  const usersPerMonth: { month: string; color: string; users: never[] }[] = [];
  months.forEach((month) => {
    usersPerMonth.push({ month, color: "", users: [] });
  });
  users.forEach((user) => {
    const userMonth = getMonthFromBirtday(user);
    // usersPerMonth.push({ month });
    usersPerMonth.find(
      (item: { month: string; color: string; users: { name: string }[] }) => {
        // console.log("month", month);
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

  // console.log("usersPerMonth=", usersPerMonth);

  return usersPerMonth;
};

/*
let result = [
  {
    month: "month",
    color: "color",
    users: [{ name: "name" }, { name: "name" }],
  },
];
*/
