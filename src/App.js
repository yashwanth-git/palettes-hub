import React, { useEffect } from "react";
//Global Styles
import GlobalStyle from "./GlobalStyles";
//Router
import { Route, Switch } from "react-router-dom";
//Components
import Navbar from "./components/Navbar";
//Pages
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import Saved from "./pages/Saved";
import About from "./pages/About";
//DARKMODE
import { useSelector, useDispatch } from "react-redux";

function App() {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  useEffect(() => {
    const isDark = sessionStorage.getItem("darkMode");
    if (isDark === "true") {
      dispatch({ type: "DARKMODE" });
    }
  }, [dispatch]);
  return (
    <div className={`App ${darkMode ? "darkMode" : ""}`}>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/create" exact>
          <Create />
        </Route>
        <Route path="/saved" exact>
          <Saved />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
