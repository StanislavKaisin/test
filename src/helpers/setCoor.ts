export const setColor = (users: { name: string }[]) => {
  let color;
  // console.log("users", users);
  const usersAmount: Number = users.length;
  switch (true) {
    case 0 <= usersAmount && usersAmount <= 2:
      // color = "grey";
      color = "#cccccc";
      break;
    case 3 <= usersAmount && usersAmount <= 6:
      // color = "blue";
      color = "#b3b3ff";
      break;
    case 7 <= usersAmount && usersAmount <= 10:
      // color = "green";
      color = "#80ff80";
      break;
    default:
      // color = "red";
      color = "#ff9999";

      // console.log("usersAmount=", usersAmount);
      // console.log("color=", color);
      break;
  }
  return color;
};

/*
[0-2] - сірий
[3-6] - синій
[7-10] - зелений
[11+] - червоний
*/
