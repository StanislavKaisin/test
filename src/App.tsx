import React from "react";

import "./App.css";

import { useAPI } from "./hooks/useAPI";
import CircularUnderLoad from "./components/CircularUnderLoad";
import TooltipItem from "./components/TooltipItem";

function App() {
  const { error, loading, usersPerMonth } = useAPI();
  if (error) {
    // console.log(error);
  }
  // console.log(users);
  // console.log("loading=", loading);
  // console.log("usersPerMonth=", usersPerMonth);

  return (
    <div className="App">
      {loading ? (
        <CircularUnderLoad />
      ) : (
        <div className="months">
          <h1>LIST OF MONTHS:</h1>
          {usersPerMonth.length &&
            usersPerMonth.map((month) => {
              console.log("month=", month);
              return (
                <TooltipItem
                  key={month.month}
                  month={month.month}
                  color={month.color}
                  users={month.users}
                />
              );
            })}
        </div>
      )}
    </div>
  );
}

export default App;
