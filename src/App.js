// import { Apartment } from "@mui/icons-material";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./presentation/Common/Routes";

import "./presentation/Common/Style/style.css";

//component imports
import LandingPage from "./presentation/LandingPage";
import Login from "./presentation/Login";

import Apartment from "./presentation/Apartment";
import Apartment1 from "./presentation/Apartment1";
import Apartment2 from "./presentation/Apartment2";
=======



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.LOGIN} component={Login} />
        <Route exact path={routes.SIGNUP} component={SignUp} />
        <Route exact path={routes.LANDINGPAGE} component={LandingPage} />

        <Route exact path={routes.APARTMENT} component={Apartment} />
        <Route exact path={routes.APARTMENT1} component={Apartment1} />
        <Route exact path={routes.APARTMENT2} component={Apartment2} />

      </Switch>
    </Router>
  );
}

export default App;
