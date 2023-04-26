import React , {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
const [isMode, setMode] = useState(false)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isMode ? "App dark" : "App light"
  const modes = isMode ? "Light Mode" : "Dark Mode"

  function modeHandler (){
    setMode((isMode) => !isMode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={modeHandler}>{modes}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
