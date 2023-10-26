import { Outlet, ScrollRestoration } from "react-router-dom";
import React, { useState, createContext} from 'react'
export let countcontext = createContext(0)
function App() {
  const [count, setCount] = useState(0);
  return (
    <countcontext.Provider className = "App" value={{ count, setCount }}>
      
      <Outlet />
      <ScrollRestoration />
     </countcontext.Provider>
  );
}

export default App;
