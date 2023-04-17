<<<<<<< HEAD
import React, {useEffect} from "react";
import Home from "./pages/Home"
import axios from 'axios'
=======
// import { Apartment } from "@mui/icons-material";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./presentation/Common/Routes";
>>>>>>> 750218d958a38362c0dfc5bb1e8a65e29aed483b

const options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/timezone',
  headers: {
    'X-RapidAPI-Key': '1e7c4349e8msh91c913daf9d5dc3p11dad1jsnce947ce28ad8',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
};


function App() {


  useEffect(() => {
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  })

  return (
<<<<<<< HEAD
    <div className="">
      <Home/>
    </div>
=======
    <Router>
      <Switch>
        <Route exact path={routes.LOGIN} component={Login} />
        <Route exact path={routes.SIGNUP} component={SignUp} />
        <Route exact path={routes.LANDINGPAGE} component={LandingPage} />

      </Switch>
    </Router>
>>>>>>> 750218d958a38362c0dfc5bb1e8a65e29aed483b
  );
}

export default App;
