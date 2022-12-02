import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./presentation/Common/Routes";

import "./presentation/Common/Style/style.css";

//component imports
import LandingPage from "./presentation/LandingPage";
import Login from "./presentation/Login";
import SignUp from "./presentation/SignUp";
import Testcomponent from "./presentation/Testcomponent";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.LOGIN} component={Login} />
        <Route exact path={routes.SIGNUP} component={SignUp} />
        <Route exact path={routes.LANDINGPAGE} component={LandingPage} />
        <Route exact path={routes.TESTCOMPONENT} component={Testcomponent} />
      </Switch>
    </Router>
  );
}

export default App;
