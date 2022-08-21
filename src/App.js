import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "./Pages/Auth";
import Code from "./Pages/Code";
import Home from "./Pages/Home";
import Success from "./Pages/Success";
import { useDispatch } from "react-redux";
import { setUser } from "./features/registerSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setUser(user));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const account = user;

  //   console.log(account?.result?.email);
  return (
    <>
      <ToastContainer />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signup">
          <Auth />
        </Route>
        <Route exact path="/entercode">
          <Code />
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
      </Switch>
    </>
  );
}

export default App;
