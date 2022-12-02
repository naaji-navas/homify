// import { Apartment } from "@mui/icons-material";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./presentation/Common/Routes";

import "./presentation/Common/Style/style.css";

//component imports
import LandingPage from "./presentation/LandingPage";
import LandingPage1 from "./presentation/LandingPage1";
import LandingPage2 from "./presentation/LandingPage2";
import Login from "./presentation/Login";
import Apartment from "./presentation/Apartment";
import Apartment1 from "./presentation/Apartment1";
import Apartment2 from "./presentation/Apartment2";
import Profile from "./presentation/Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.LOGIN} component={Login} />
        <Route exact path={routes.PROFILE} component={Profile} />
        <Route exact path={routes.LANDINGPAGE} component={LandingPage} />
        <Route exact path={routes.LANDINGPAGE1} component={LandingPage1} />
        <Route exact path={routes.LANDINGPAGE2} component={LandingPage2} />
        <Route exact path={routes.APARTMENT} component={Apartment} />
        <Route exact path={routes.APARTMENT1} component={Apartment1} />
        <Route exact path={routes.APARTMENT2} component={Apartment2} />
      </Switch>
    </Router>
  );
}

export default App;
