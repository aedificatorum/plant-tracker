import React from 'react';
import './App.css';
import tw from 'tailwind.macro';
import styled from '@emotion/styled'
import Navbar from './Navbar';
import { getPlants } from './Components/PlantStore'

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
    <div>
      <Navbar />
      <Header>
      </Header>
      <main>
        {allPlants}
      </main>
    </div>
  );
}

export default App;
