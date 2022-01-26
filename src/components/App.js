import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const appClass = isDarkMode? "Dark" : "Light"
  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={handleDarkModeClick} toggle={appClass}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
