import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Plant from "./Components/Plant";
import PlantList from './Components/PlantList'

import { seedTestData } from "./Components/PlantStore";
seedTestData();

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={PlantList} />
          <Route path="/plant/:id" component={Plant} />
        </Switch>
      </main>
    </>
  );
}

export default App;
