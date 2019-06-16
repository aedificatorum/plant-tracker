import React from 'react';
import './App.css';
import tw from 'tailwind.macro';
import styled from '@emotion/styled'
import { Switch, Route } from "react-router-dom";
import Navbar from './Navbar';
import { getPlants } from './Components/PlantStore'
import PlantId from './Components/PlantId'

const Header = styled.header`
${tw`bg-red-300 min-h-screen flex flex-col items-center justify-center text-xl text-white`};
`;

function App() {
  const allPlants = getPlants().map(plant => {
    return (
      <div key={plant.name}>{plant.name}</div>
    )
  })

  return (
    <React.Fragment>
      <Navbar />
      <Header>
      </Header>
      <main>
        <Switch>
          <Route exact path="/" component={PlantId} />
          </Switch>
        <PlantId />
      </main>
    </React.Fragment>
  );
}

export default App;
