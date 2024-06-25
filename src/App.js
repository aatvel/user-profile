import React, { useState } from "react";
import Profile from "./components/Profile/Profile";
import TodoList from "./components/TodoList/TodoList";
import Profiles from "./components/Profiles/Profiles";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("profile");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <nav>
        <button className={currentPage === "profile" ? "nav_button active" : "nav_button"} onClick={() => handlePageChange("profile")}>Мой профиль</button>
        <button className={currentPage === "profiles" ? "nav_button active" : "nav_button"} onClick={() => handlePageChange("profiles")}>Профили</button>
      </nav>
      {currentPage === "profile" && <><Profile /><TodoList /></>}
      {currentPage === "profiles" && <Profiles /> }
    </div>
  );
}

export default App;
