import React from "react";
import "./App.css";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Plant from "./Components/Plant";
import PlantList from './Components/PlantList'

const AllPlants = styled.div`
  ${tw`bg-red-300 min-h-screen flex flex-col items-center justify-center text-xl text-white`};
`;

function App() {
  

  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={PlantList} />
          <Route path="/plant/:id" component={Plant} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
