import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { useAPI } from "./hooks/useAPI";

import { getMonthsFromUsers } from "./helpers/getMonthsFromUsers";

function App() {
  const { error, loading, usersPerMonth } = useAPI();
  if (error) {
    // console.log(error);
  }
  // console.log(users);
  // console.log("loading=", loading);
  console.log("usersPerMonth=", usersPerMonth);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="App">
          {usersPerMonth.length &&
            usersPerMonth.map((month) => {
              return (
                <p key={month.month} style={{ backgroundColor: month.color }}>
                  {month.month}
                </p>
              );
            })}
        </div>
      )}
    </>
  );
}

export default App;
