import React, {useEffect} from "react";
import Home from "./pages/Home"
import axios from 'axios'

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
    <div className="">
      <Home/>
    </div>
  );
}

export default App;
