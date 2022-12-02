import { Apartment } from "@mui/icons-material";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./presentation/Common/Routes";

import "./presentation/Common/Style/style.css";

//component imports
import LandingPage from "./presentation/LandingPage";
import Login from "./presentation/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.LOGIN} component={Login} />
        <Route exact path={routes.LANDINGPAGE} component={LandingPage} />
        <Route exact path={routes.APARTMENT} component={Apartment} />
      </Switch>
    </Router>
  );
}

export default App;
