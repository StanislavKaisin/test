export const setColor = (users: { name: string }[]) => {
  let color;
  const usersAmount: Number = users.length;
  switch (true) {
    case 0 <= usersAmount && usersAmount <= 2:
      color = "#cccccc";
      break;
    case 3 <= usersAmount && usersAmount <= 6:
      color = "#b3b3ff";
      break;
    case 7 <= usersAmount && usersAmount <= 10:
      color = "#80ff80";
      break;
    default:
      color = "#ff9999";
      break;
  }
  return color;
};
