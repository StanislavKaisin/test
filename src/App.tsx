import React from "react";

import "./App.css";

import { useAPI } from "./hooks/useAPI";
import CircularUnderLoad from "./components/CircularUnderLoad";
import TooltipItem from "./components/TooltipItem";

function App() {
  const { error, loading, usersPerMonth } = useAPI();
  if (error) {
    console.log(error);
    return (
      <div className="App">
        <h2>Something went wrong...</h2>
      </div>
    );
  }

  return (
    <div className="App">
      {loading ? (
        <CircularUnderLoad />
      ) : (
        <div className="months">
          <h2>LIST OF THE MONTHS:</h2>
          {usersPerMonth.length &&
            usersPerMonth.map((month) => {
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
